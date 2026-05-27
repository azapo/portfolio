import { META, type ProjectInfo, type ProjectKey } from "../../constants";
import Seo from "../Seo";
import {
  capitalizeFirstLetterOfWords,
  getImageComponent,
  getTextComponent,
  getVideoComponent,
  interleaveArrays,
} from "../../utils";

type ProjectProps = {
  project: ProjectInfo;
  projectKey: ProjectKey | string;
};

const Project = ({ project, projectKey }: ProjectProps) => {
  const mediaComponents = [
    ...project.videos.map(getVideoComponent),
    ...project.images.map(getImageComponent),
  ];
  const textComponents = project.texts.map(getTextComponent);
  const content = interleaveArrays(textComponents, mediaComponents);
  const title = capitalizeFirstLetterOfWords(projectKey);

  return (
    <section className="content-page">
      <Seo title={`${title} | ${META.title}`} />

      <header className="page-heading">
        <h1>{title} Project</h1>
      </header>

      {project.links && (
        <section className="project-links">
          <h2>Links</h2>
          <ul>
            {project.links.map((link) => (
              <li key={link}>
                <a href={link} rel="noopener noreferrer" target="_blank">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="project-detail-flow">
        {content.map((component, index) => (
          <div className="project-detail-item" key={`${projectKey}-${index}`}>
            {component}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
