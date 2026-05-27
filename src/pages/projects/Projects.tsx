import { Link } from "react-router-dom";
import { META, PROJECTS } from "../../constants";
import Seo from "../../components/Seo";
import { capitalizeFirstLetterOfWords, changeStringSeparator } from "../../utils";

const Projects = () => (
  <section className="content-page">
    <Seo title={`My Projects | ${META.title}`} />

    <header className="page-heading">
      <h1>My Projects</h1>
    </header>

    <div className="project-grid">
      {Object.entries(PROJECTS).map(([key, value]) => (
        <Link
          className="project-card"
          key={key}
          to={`/projects/${changeStringSeparator(key, " ", "_")}`}
        >
          <img alt="" src={value.cover} />
          <span>{capitalizeFirstLetterOfWords(key)}</span>
          <p>{value.description}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default Projects;
