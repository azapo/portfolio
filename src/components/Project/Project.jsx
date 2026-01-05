import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { META } from "../../constants";
import { capitalizeFirstLetterOfWords, getImageComponet, getTextComponent, getVideoComponent, interleaveArrays } from "../../utils";

const Project = ({object}) => {

  const [key, value] = object;

  const { texts, images, videos } = value;

  const videoComponents = videos.map(video => getVideoComponent(video))
  const imageComponents = images.map(image => getImageComponet(image))
  const textComponents = texts.map(text => getTextComponent(text))

  const content = interleaveArrays(textComponents, videoComponents.concat(imageComponents))

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

        {value.links && 
          <Row className="sec_sp">
            <Col className="align-items-center">
                <h3>Links:</h3>
                <ul>
                  {value.links.map(link => 
                    <li key={link}>
                      <a href={link} target="_blank">{link}</a>
                    </li>
                  )}
                </ul>
            </Col>
          </Row>}

          {content.map((component, i) => 
            <Row key={i} className="sec_sp justify-content-center">
              {component}
            </Row>
          )}

          <br />

      </Container>
    </HelmetProvider>
  );
};

export default Project;
