import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import clone from "../assets/img/zoomclone.png"
import ecommerce from "../assets/img/ecommerceProject.png";
import admin from "../assets/img/adminImg.png";
import crm from "../assets/img/crm.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Cards from "../component/Cards";
// import Experience from "./Experience";
import mactoImg from "../assets/img/mactosys.png";
import careerDream from "../assets/img/careerDream.png";
import ProjectCard from "../component/ProjectCard";
const Project = () => {
  const projects = [
    {
      title: "Zoomcar Clone",
      description: "Demo Project",
      imgUrl: clone,
      projectUrl: 'https://zoomcar-beige.vercel.app/' 
    },
   
    {
      title: "Grocery Store",
      description: "E-commerce website",
      imgUrl: ecommerce,
      projectUrl: "https://abhik8461.github.io/fruitables/index.html"
    },
    {
      title: "Admin Panel",
      description: "Live project Template",
    imgUrl: admin,
    projectUrl:"https://admin-panel-two-pied.vercel.app/"
    },
    {
      title: "Crm Website",
      description: "CRM Website Template",
      imgUrl: crm,
      projectUrl:"https://crm-website-ten.vercel.app/ "
    },
    {
      title: "Real Estate Property website",
      description: "Live Project",
      imgUrl: ecommerce,
      projectUrl:"https://nextflat.ch/"
    },
    {
      title: "Admin Panel",
      description: "Design for Real estate Property website",
      imgUrl: admin,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   // imgUrl: projImg3,
    // },
  ];
  const experiences = [
    {
      description: "Careers Dream Education",
      title: "Web Development ",
      period:"(Aug 2022 - Nov 2022)",
      imgUrl: careerDream,
    },
    {
      description: "Mactosys Technologies",
      title: "ReactJs Developer ",
      period:"(Feb 2023 - Present)",
      imgUrl: mactoImg,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {experiences.map((items, index) => {
                            return <Cards key={index} {...items} />;
                          })}
                        </Row>
                        {/* <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p> */}
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
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
export default Project;
