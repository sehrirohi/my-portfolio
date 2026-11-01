import { useState } from "react";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      number: "01",
      title: "Recipe Finder",
      category: "Food Discovery Application",
      description:
        "A recipe discovery application where users can explore recipes, search for dishes and view ingredients and cooking instructions.",
      technologies: ["React", "JavaScript", "CSS"],
      image: `${import.meta.env.BASE_URL}projects/recipe-finder.png`,
    },
    {
      number: "02",
      title: "E-Commerce Website",
      category: "Online Shopping Platform",
      description:
        "A modern shopping application with product browsing, user authentication, shopping cart and order management.",
      technologies: ["React", "Firebase", "Firestore"],
      image: `${import.meta.env.BASE_URL}projects/ecommerce.png`,
    },
    {
      number: "03",
      title: "Movie Search App",
      category: "Movie Discovery Application",
      description:
        "A movie discovery application that allows users to search for movies and explore movie details.",
      technologies: ["React", "TMDB API", "CSS"],
      image: `${import.meta.env.BASE_URL}projects/movie.png`,
    },
    {
      number: "04",
      title: "Quiz App",
      category: "Interactive Learning Application",
      description:
        "An interactive quiz application with multiple-choice questions, score tracking and a user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: `${import.meta.env.BASE_URL}projects/quiz-app.png`,
    },
  ];

  return (
    <section className="projects-section section" id="projects">
      <div className="projects-heading">
        <div>
          <p className="section-label">MY PROJECTS</p>
          <h3>
            Selected <span>Work</span>
          </h3>
        </div>

        <p>
          A collection of projects I've created while learning
          and developing my skills as a React Developer.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div
              className="project-preview clickable-preview"
              onClick={() => setSelectedImage(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(project);
                }
              }}
              aria-label={`View full screenshot of ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
              />

              <span className="project-image-number">
                {project.number}
              </span>

              <div className="image-hover-text">
                <span>↗</span> View Full Image
              </div>
            </div>

            <div className="project-info">
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <button
                  className="view-image-button"
                  onClick={() => setSelectedImage(project)}
                >
                  View Screenshot ↗
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            className="image-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>

          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={`${selectedImage.title} full screenshot`}
            />

            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;