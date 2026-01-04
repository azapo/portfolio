import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { META, PROJECTS } from "../../constants";
import { Link } from "react-router-dom";
import { changeStringSeparator } from "../../utils";

const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Projects | {META.title} </title>{" "}
          <meta name="description" content={META.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Projects</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {Object.entries(PROJECTS).map(([key, value]) => {

            return (
              <div key={key} className="po_item">
                <img src={require(`../../assets/images/proj_${changeStringSeparator(key, " ", "_")}/cover.png`)} alt="" />
                <div className="content">
                  <p>{value.description}</p>
                  <Link to={`/projects/${changeStringSeparator(key, " ", "_")}`}>view project</Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Projects;
