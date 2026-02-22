import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20
                 bg-white text-dark
                 dark:bg-dark dark:text-white
                 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-darkgray dark:text-gray mb-10 text-lg">
          Let’s build something together.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-base">
          <a
            href="mailto:mykhailo.drogovoz@voco.ee"
            className="flex items-center gap-3 hover:text-dark/70 dark:hover:text-white/70 transition-colors"
          >
            <FiMail className="text-xl" />
            <span>mykhailo.drogovoz@voco.ee</span>
          </a>

          <a
            href="tel:+37253725074"
            className="flex items-center gap-3 hover:text-dark/70 dark:hover:text-white/70 transition-colors"
          >
            <FiPhone className="text-xl" />
            <span>+372 5372 5074</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mykhailo-drogovoz-2b60633a6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-dark/70 dark:hover:text-white/70 transition-colors"
          >
            <FiLinkedin className="text-xl" />
            <span>mykhailo-drogovoz-2b60633a6</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
