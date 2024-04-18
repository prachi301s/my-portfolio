import { Col } from "react-bootstrap";

const Cards = ({ title, description, imgUrl,period }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <span>{period}</span>
        </div>
      </div>
    </Col>
  )
}
export default Cards;