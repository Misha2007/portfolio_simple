import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Init dark mode
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && prefersDark);
    setDark(isDark);
  }, []);

  // Sync dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed top-0 w-full z-50
          bg-white/80 backdrop-blur
          border-b border-gray/30
          dark:bg-dark/80 dark:border-gray/50
        "
      >
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="font-semibold tracking-tight"
          >
            Mykhailo Drogovoz
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            {["about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:opacity-60 transition-opacity"
              >
                {item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}

            <button
              onClick={() => setDark((p) => !p)}
              className="
                p-2 rounded-full border border-gray/30 shadow-lg
                bg-dark text-white dark:bg-white dark:text-dark
                hover:opacity-80 transition-colors
              "
              aria-label="Toggle theme"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme toggle */}
            <button
              onClick={() => setDark((p) => !p)}
              className="
                p-2 rounded-full border border-gray/30
                bg-dark text-white dark:bg-white dark:text-dark
                transition-colors
              "
              aria-label="Toggle theme"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="p-2"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[60]
          md:hidden
          bg-white dark:bg-dark
          transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Menu header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-gray/30 dark:border-gray/50">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <FiX size={26} />
          </button>
        </div>

        {/* Menu links */}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-y-8 text-xl">
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="font-semibold hover:opacity-70 transition-opacity"
            >
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
