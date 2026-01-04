import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { META } from "../../constants";
import { capitalizeFirstLetterOfWords } from "../../utils";
import headshot from "../../assets/images/headshot.jpg"

const Project = ({object}) => {

  const [key, value] = object;
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{capitalizeFirstLetterOfWords(key)} | {META.title}</title>
          <meta name="description" content={META.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col>
            <h1 className="display-4 mb-4">{capitalizeFirstLetterOfWords(key)} Project</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col className="d-flex align-items-center">
              <p>abc</p>
          </Col>
        </Row>
        <Row className="sec_sp justify-content-center">
          <Col lg={3}>
            <img className="img-fluid mx-auto d-block" src={headshot} />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default Project;
