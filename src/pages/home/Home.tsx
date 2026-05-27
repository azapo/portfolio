import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { INTRO_DATA, META } from "../../constants";
import Seo from "../../components/Seo";
import headshot from "../../assets/images/headshot.jpg";

const Home = () => (
  <section className="home-hero" id="home">
    <Seo title={META.title} />

    <div className="hero-media">
      <img alt="Aram Zaprosyan" src={headshot} />
    </div>

    <div className="hero-copy">
      <div className="hero-copy-inner">
        <h1 className="hero-title">{INTRO_DATA.title}</h1>
        <p className="hero-subtitle">
          <Typewriter
            options={{
              strings: [...INTRO_DATA.statements],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </p>
        <p className="lead">{INTRO_DATA.description}</p>
        <div className="button-row">
          <Link className="button button-primary" to="/projects">
            My Projects
          </Link>
          <Link className="button button-secondary" to="/contact">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
