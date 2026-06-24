import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}

export default Projects;