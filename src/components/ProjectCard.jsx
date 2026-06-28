import { Link } from "react-router-dom";

function ProjectCard({ project, variant = "featured" }) {
  if (variant === "featured") {
    return (
      <Link to={`/projects/${project.slug}`} className="project-card project-card--featured shadow">
        <div className="card-thumb">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="card-thumb-img" />
          ) : (
            <div className="card-thumb-placeholder" />
          )}
        </div>
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <div className="card-tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
          <p className="card-tagline">{project.tagline}</p>
          <div className="card-footer">
            <span className="card-open-btn">open project →</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "mini") {
    return (
      <Link to={`/projects/${project.slug}`} className="project-card project-card--mini shadow">
        <div className="card-thumb">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="card-thumb-img" />
          ) : (
            <div className="card-thumb-placeholder" />
          )}
        </div>
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <div className="card-tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "list") {
    return (
      <Link to="/creative" className="project-card project-card--list">
        <div className="card-list-content">
          <h3 className="card-title">{project.title}</h3>
          <div className="card-tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        </div>
        <span className="card-list-arrow">→</span>
      </Link>
    );
  }
}

export default ProjectCard;
