import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
          <div className="skill-bx wow zoomIn">
                      
                        <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h4>Skills</h4>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Front-end Technologies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI Liberaries</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">React Liberaries</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                        {/* <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
                        </div>
         
          </Col>
        </Row>
      </Container>
      {/* <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mb-3 ">Skills</h3>

            <div className="skill-bx wow zoomIn flex-lg-row align-content-around">
              <Row></Row>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

              <div className="item">
                <img src={meter1} alt="Image" />

                <h5>Web Development</h5>
              </div>
              <div className="item">
                <img src={meter2} alt="Image" />
                <h5>Brand Identity</h5>
              </div>
              <div className="item">
                <img src={meter3} alt="Image" />
                <h5>Logo Design</h5>
              </div>
              <div className="item">
                <img src={meter1} alt="Image" />
                <h5>Web Development</h5>
              </div>
              <div className="item">
                <img src={meter1} alt="Image" />

                <h5>Web Development</h5>
              </div>
              <div className="item">
                <img src={meter2} alt="Image" />
                <h5>Brand Identity</h5>
              </div>
              <div className="item">
                <img src={meter3} alt="Image" />
                <h5>Logo Design</h5>
              </div>
              <div className="item">
                <img src={meter1} alt="Image" />
                <h5>Web Development</h5>
              </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div> */}
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
export default Skills;
