import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <h3>{project.title}</h3>
    </Link>
  );
}

export default ProjectCard;