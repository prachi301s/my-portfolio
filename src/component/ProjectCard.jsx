import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl,period ,projectUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span><a style={{textDecoration: 'none',color:"white"}} href={projectUrl}>{description}</a></span>
          <br/>
          <span>{period}</span>
        </div>
      </div>
    </Col>
  )
}
export default ProjectCard;