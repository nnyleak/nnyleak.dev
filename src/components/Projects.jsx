import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const featured = projects.filter((p) => p.section === "featured");
const builds = projects.filter((p) => p.section === "build");
const creative = projects.filter((p) => p.section === "creative");

function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-inner">
        <div className="projects-header">
          <h3 className="projects-title">featured work</h3>
          <div className="projects-divider" />
        </div>

        <div className="projects-featured">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} variant="featured" />
          ))}
        </div>

        <div className="projects-secondary">
          <div className="projects-builds">
            <div className="projects-section-label">
              <p>more builds</p>
              <div className="projects-divider"></div>
            </div>

            <div className="projects-builds-grid">
              {builds.map((p) => (
                <ProjectCard key={p.slug} project={p} variant="mini" />
              ))}
            </div>
          </div>

          <div className="projects-creative">
            <div className="projects-section-label">
              <p>other creative things</p>
              <div className="projects-divider"></div>
            </div>
            <div className="projects-creative-list">
              {creative.map((p) => (
                <ProjectCard key={p.slug} project={p} variant="list" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
