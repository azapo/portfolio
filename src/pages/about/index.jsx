import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  ABOUT_ME_BLURB,
  META,
  WORK_HISTORY,
  SKILLS,
  RELEVANT_COURSEWORK
} from "../../constants";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {META.title}</title>
          <meta name="description" content={META.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Who Am I? (Briefly)</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{ABOUT_ME_BLURB.aboutMe}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work History</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {WORK_HISTORY.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.job}</th>
                      <td>{data.company}</td>
                      <td>{data.dates}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7">
            {SKILLS.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data}</h3>
                  {/* Leaving as reference if I ever want to use this later */}
                  {/* <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Relevant Coursework</h3>
          </Col>
          <Col lg="7">
            {RELEVANT_COURSEWORK.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data}</h3>
                </div>
              );
            })}
          </Col>
        </Row>
        {/* Leaving as reference if I ever want to use this later */}
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
