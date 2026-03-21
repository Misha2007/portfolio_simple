export default function About() {
  return (
    <section
      id="about"
      className="py-32 min-h-screen flex items-center
                 bg-white text-dark
                 dark:bg-dark dark:text-white
                 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-darkgray dark:text-gray text-lg leading-relaxed">
          I am <strong>Mykhailo Drogovoz</strong>, 18 y.o, and currently I am a
          student at <strong>Tartu Vocational School</strong> in a{" "}
          <strong>software development</strong> faculty. I've been studying here
          for the past three years. Prior to this, I spent one year studying at
          a school in <strong>Tartu Descartes School</strong> before enrolling
          in the vocational school. Before moving abroad, I attended gymnasium{" "}
          <strong>Kyiv-Mohyla Collegium</strong> in <strong>Ukraine</strong>.
        </p>
        <br />
        <p className="text-darkgray dark:text-gray text-lg leading-relaxed">
          I decided to become a software developer because this speciality opens
          a lot of opportunities and you can be as creative as you want. My{" "}
          <strong>first experience</strong> with coding came through a{" "}
          <strong>website building course</strong> and after working on a few
          projects, I realized that software development was the{" "}
          <strong>perfect field</strong> for me. The more I learned, the more I
          felt motivated to continue pursuing this path.
        </p>
        <br />
        <p className="text-darkgray dark:text-gray text-lg leading-relaxed">
          I have taken part in <strong>ASI Karikas</strong>, where me and my
          teammate got <strong>2nd place</strong>. In addition, I took part in
          the <strong>Hack Club's Neighborhood program</strong> last summer. The
          goal of the program was to build a project over{" "}
          <strong>100 hours</strong> and potentially get invited to San
          Francisco. Although the project was <strong>closed</strong> before I
          could complete it, I received valuable{" "}
          <strong>feedback from testers</strong> and learned a lot through the
          process.
        </p>
        <br />
        <p className="text-darkgray dark:text-gray text-lg leading-relaxed">
          Outside of programming, I enjoy playing <strong>volleyball</strong>{" "}
          and <strong>ping pong</strong>. I also like to play the{" "}
          <strong>guitar</strong> in my free time; it's a great way to relax and
          express creativity in a different way.
        </p>
        <br />
        <p className="text-darkgray dark:text-gray text-lg leading-relaxed">
          Thank you for visiting my portfolio, and feel free to explore my work!
        </p>
      </div>
    </section>
  );
}
