import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // On mount, set dark mode based on localStorage or system preference
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && prefersDark);
    setDark(isDark);
  }, []);

  // Sync document class and localStorage whenever `dark` changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <nav
      className="fixed top-0 w-full bg-white/80 backdrop-blur border-b border-gray/30 z-50
                    dark:bg-dark/80 dark:border-gray/50 transition-colors"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="hover:opacity-60 transition-opacity">
          <span className="font-semibold tracking-tight text-dark dark:text-white">
            Mykhailo Drogovoz
          </span>
        </a>

        <div className="flex items-center space-x-6 text-sm">
          <a
            href="#about"
            className="text-dark dark:text-white hover:opacity-60 transition-opacity"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-dark dark:text-white hover:opacity-60 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-dark dark:text-white hover:opacity-60 transition-opacity"
          >
            Contact
          </a>

          {/* Dark mode toggle bulb */}
          <button
            onClick={() => setDark((prev) => !prev)}
            className="p-2 rounded-full border border-gray/30 shadow-lg
                       bg-dark text-white dark:bg-white dark:text-dark
                       hover:opacity-80 transition-colors"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
