import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("promoClosed")) {
      setShow(false);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("promoClosed", "true");
  };

  return (
    <section
      id="hero"
      className="
        pt-24 md:pt-28
    min-h-[90vh] md:min-h-screen
    flex items-center
    bg-white text-dark
    dark:bg-dark dark:text-white
    transition-colors relative
      "
    >
      {/* Promo */}
      {show && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-sm">
          <div
            className="
            bg-dark text-white border border-white
            rounded-full shadow-lg
            flex items-center justify-between
            px-5 py-3
            animate-bounce md:animate-none
          "
          >
            <a
              href="https://mykhailoportfolio-3d.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Try new-format portfolio!
            </a>
            <button
              onClick={handleClose}
              className="ml-3 text-lg hover:text-gray-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div
        className="
        max-w-5xl mx-auto px-6
        flex flex-col-reverse md:flex-row
        items-center gap-10
      "
      >
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1
            className="
            text-3xl sm:text-4xl md:text-6xl
            font-bold leading-tight
          "
          >
            Software Engineering Student
          </h1>

          <p
            className="
            mt-4 text-base sm:text-lg
            max-w-xl mx-auto md:mx-0
            text-darkgray dark:text-white
          "
          >
            I build clean, accessible, and performant web applications using
            modern frameworks.
          </p>

          <a
            href="#projects"
            className="
              inline-block mt-6
              rounded-full px-6 py-3 text-sm
              bg-white text-dark border border-dark
              hover:bg-dark hover:text-white hover:border-white
              dark:bg-dark dark:text-white dark:border-white
              dark:hover:bg-white dark:hover:text-dark
              transition-colors
            "
          >
            View my work
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./photo.png"
            alt="Your Image"
            className="
              w-48 sm:w-56 md:w-full
              max-w-xs
              rounded-3xl shadow-xl
              border-2 border-dark dark:border-white
              transition-colors
            "
          />
        </div>
      </div>
    </section>
  );
}
