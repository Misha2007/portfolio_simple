import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("promoClosed", "true");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center
                 bg-white text-dark
                 dark:bg-dark dark:text-white
                 transition-colors relative"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}

        {show && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-dark text-white border-2 border-white rounded-full shadow-lg flex items-center px-6 py-3 animate-bounce">
              <a
                href="https://your-3d-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline"
              >
                Try new-format portfolio!
              </a>
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-400 font-bold ml-auto"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Software Engineering Student
          </h1>
          <p
            className="mt-6 text-lg max-w-xl mx-auto md:mx-0
                        text-darkgray
                        dark:text-white"
          >
            I build clean, accessible, and performant web applications using
            modern JavaScript frameworks.
          </p>
          <a
            href="#projects"
            className="inline-block mt-8 rounded-full px-6 py-3 text-sm
             bg-white text-dark border border-dark
             hover:bg-dark hover:text-white hover:border-white
             dark:bg-dark dark:text-white dark:border-white
             dark:hover:bg-white dark:hover:text-dark dark:hover:border-white
             transition-colors"
          >
            View my work
          </a>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="./photo.png"
            alt="Your Image"
            className="w-full h-auto max-w-xs rounded-3xl shadow-xl border-2
                       border-dark
                       dark:border-white
                       transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
