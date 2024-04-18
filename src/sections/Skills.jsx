import "animate.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Images from "../component/Images";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/javascript.png";
import reactLogo from "../assets/img/react.png";
import reduxLogo from "../assets/img/redux.png";
import queryLogo from "../assets/img/react-query.png";
import oops from "../assets/img/java.png";
import muiLogo from "../assets/img/mui.png";
import antDlogo from "../assets/img/ant-design.png";
import mantineLogo from "../assets/img/mantine.png";
import routerLogo from "../assets/img/react-router.png";
import i18n from "../assets/img/i18next.png";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const frontendSkills = [
    {
      title: "HTML",

      imgUrl: html,
    },
    {
      title: "CSS",

      imgUrl: css,
    },
    {
      title: "Java Script",

      imgUrl: js,
    },
    {
      title: "React",

      imgUrl: reactLogo,
    },
    {
      title: "Redux/Redux-Toolkit",

      imgUrl: reduxLogo,
    },
    {
      title: "React Query",

      imgUrl: queryLogo,
    },
    {
      title: "Oops Programming",

      imgUrl: oops,
    },
  ];
  const reactSkills = [
    {
      title: "Material UI",

      imgUrl: muiLogo,
    },
    {
      title: "AntD UI",

      imgUrl: antDlogo,
    },
    {
      title: "Mantine UI",

      imgUrl: mantineLogo,
    },
    {
      title: "Router",

      imgUrl: routerLogo,
    },
    {
      title: "I18n",

      imgUrl: i18n,
    },
    // {
    //   title: "React Query",

    //   imgUrl: queryLogo,
    // },
    // {
    //   title: "Oops Programming",

    //   imgUrl: oops,
    // },
  ];
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

                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">
                            Front-end Technologies
                          </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                          <Nav.Link eventKey="second">JS Liberaries</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                          <Nav.Link eventKey="third">
                            React Liberaries
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {frontendSkills.map((fItem, index) => {
                              return <Images key={index} {...fItem} />;
                            })}
                          </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                          <Row>
                            {reactSkills.map((fItem, index) => {
                              return <Images key={index} {...fItem} />;
                            })}
                          </Row>
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
