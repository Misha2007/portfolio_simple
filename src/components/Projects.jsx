import { useState, useMemo } from "react";

const projects = [
  {
    id: 1,
    title: "Ternet",
    categories: ["Django", "Python", "Web Development"],
    description:
      "This is a Django-based forum project where users can register, create topics, post messages, and reply to messages.",
    github: "https://github.com/Misha2007/ternet",
    type: "solo",
  },
  {
    id: 2,
    title: "Flash Mind",
    categories: ["React", "JavaScript", "Frontend"],
    description: "It is a frontend-only platform for anime enthusiasts.",
    github: "https://github.com/Misha2007/Visual-Memory-game",
    type: "group",
  },
  {
    id: 3,
    title: "Chess Game",
    categories: ["Pygame", "Python", "Game Development"],
    description:
      "Chess implementation in Python with AI using minimax and alpha-beta pruning.",
  },
  {
    id: 4,
    title: "Anime Website",
    categories: ["HTML", "JavaScript", "Frontend"],
    description: "Frontend-only anime platform with curated lists and merch.",
    github: "https://github.com/Misha2007/anime-site",
    type: "solo",
    link: "https://ita23drogovoz.ita.voco.ee/Veebiarendus/animesite/",
  },
  {
    id: 5,
    title: "Sportvana",
    categories: ["React", "Node.js", "JavaScript", "Fullstack"],
    description: "Fitness gamification app with rewards and leaderboard.",
    github: "https://github.com/MykhailoDrogovoz/hackatime",
    type: "solo",
    link: "https://sportvana.netlify.app",
  },
  {
    id: 6,
    title: "Booking system",
    categories: ["React", "Node.js", "JavaScript", "Fullstack"],
    description: "Full-stack hotel booking platform with Stripe payments.",
    github: "https://github.com/Misha2007/booking_system",
    type: "group",
    link: "https://bosystem.netlify.app/",
  },
  {
    id: 7,
    title: "Smart City Event Map",
    categories: ["Next.js", "JavaScript", "Frontend"],
    description: "Interactive city map showing events, cinemas and theatres.",
    github: "https://github.com/Misha2007/smart-city-event-map",
    type: "solo",
    link: "https://smart-city-events-map.vercel.app/",
  },
];

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [linkFilter, setLinkFilter] = useState("all"); // all | with | without
  const [showFilters, setShowFilters] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Get all unique categories dynamically
  const allCategories = useMemo(() => {
    return [...new Set(projects.flatMap((p) => p.categories))];
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      project.categories.some((c) => selectedCategories.includes(c));

    const matchesLink =
      linkFilter === "all" ||
      (linkFilter === "with" && project.link) ||
      (linkFilter === "without" && !project.link);

    return matchesSearch && matchesCategory && matchesLink;
  });

  return (
    <section
      id="projects"
      className="py-32 bg-white text-black
             dark:bg-dark dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold dark:text-white">Projects</h2>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-6 py-3 rounded-full text-sm w-full
           bg-white text-dark border border-gray/40
           placeholder:text-darkgray-500
           dark:bg-dark dark:text-white
           dark:border-gray/30 dark:placeholder:text-darkgray
           focus:outline-none"
          />

          <button
            onClick={() => setShowFilters(true)}
            className="px-6 py-3 text-sm rounded-full border
           border-gray/40
           hover:bg-dark hover:text-white
           dark:hover:bg-white dark:hover:text-dark
           transition-colors"
          >
            Filters
          </button>
        </div>

        {/* Filter Modal */}
        {showFilters && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
            <div
              className="bg-white text-dark p-8 rounded-2xl
           w-full max-w-lg
           dark:bg-dark dark:text-white
           border border-gray/30
           shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-6">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <p className="font-medium mb-2">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={`px-4 py-1 text-sm rounded-full border transition-colors
    ${
      selectedCategories.includes(cat)
        ? "bg-dark text-white border-dark dark:bg-white dark:text-dark dark:border-white"
        : "bg-white text-dark border-gray/40 dark:bg-dark dark:text-white dark:border-gray/30"
    }
  `}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Link filter */}
              <div className="mb-6">
                <p className="font-medium mb-2">Project link</p>
                <div className="flex gap-2">
                  {["all", "with", "without"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setLinkFilter(type)}
                      className={`px-4 py-1 border rounded-full text-sm ${
                        linkFilter === type
                          ? "bg-dark text-white border-dark dark:bg-white dark:text-dark dark:border-white"
                          : "bg-white text-dark border-gray/40 dark:bg-dark dark:text-white dark:border-gray/30"
                      }`}
                    >
                      {type === "all"
                        ? "All"
                        : type === "with"
                          ? "With link"
                          : "No link"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-5 py-2 border rounded-full text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {activeProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-30">
            <div
              className="bg-white text-dark p-8 rounded-2xl
           w-full max-w-lg
           dark:bg-dark dark:text-white
           border border-gray/30
           shadow-2xl
           relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-sm border px-3 py-1 rounded-full"
              >
                Close
              </button>

              <h3 className="text-2xl font-semibold tracking-tight">
                {activeProject.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-darkgray">
                <p>
                  <strong>Type:</strong>{" "}
                  {activeProject.type === "solo"
                    ? "Solo project"
                    : "Group project"}
                </p>

                {activeProject.github && (
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      View repository
                    </a>
                  </p>
                )}

                {activeProject.link && (
                  <p>
                    <strong>Live demo:</strong>{" "}
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Visit website
                    </a>
                  </p>
                )}
              </div>
              <p className="mt-3 text-sm text-darkgray">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {activeProject.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs rounded-full border
           border-gray/40 text-darkgray-600
           dark:border-gray/30 dark:text-gray"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="p-6 rounded-xl border cursor-pointer
           bg-white text-dark border-gray/40
           dark:bg-dark dark:text-white dark:border-gray/20
           transition-all duration-300 hover:opacity-80"
            >
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-darkgray-600 dark:text-gray leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs rounded-full border
           border-gray/40 text-darkgray-600
           dark:border-gray/30 dark:text-gray"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
