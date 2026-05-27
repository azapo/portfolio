import {
  ABOUT_ME_BLURB,
  META,
  RELEVANT_COURSEWORK,
  SKILLS,
  WORK_HISTORY,
} from "../../constants";
import Seo from "../../components/Seo";

const About = () => (
  <section className="content-page">
    <Seo title={`About Me | ${META.title}`} />

    <header className="page-heading">
      <h1>About Me</h1>
    </header>

    <section className="split-section">
      <h2>Who Am I? (Briefly)</h2>
      <p>{ABOUT_ME_BLURB.aboutMe}</p>
    </section>

    <section className="split-section">
      <h2>Work History</h2>
      <div className="timeline-list">
        {WORK_HISTORY.map((item) => (
          <article className="timeline-item" key={`${item.job}-${item.dates}`}>
            <h3>{item.job}</h3>
            <p>{item.company}</p>
            <time>{item.dates}</time>
          </article>
        ))}
      </div>
    </section>

    <section className="split-section">
      <h2>Technical Skills</h2>
      <ul className="tag-list">
        {SKILLS.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>

    <section className="split-section">
      <h2>Relevant Coursework</h2>
      <ul className="course-list">
        {RELEVANT_COURSEWORK.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </section>
  </section>
);

export default About;
