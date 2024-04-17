import { Col } from "react-bootstrap";

const Images = ({ title, description, imgUrl }) => {
  return (
    <>
    <Col size={12} sm={3} md={3}>
      <div className="skill-img-mainbox flex-lg-row" >
        <div className="skill-img">
          <img src={imgUrl} width="10rem"/>
        </div>

        <div className="skill-text mt-2">
          <h6>{title}</h6>
          {/* <span>"description"</span> */}
        </div>
      </div>
      
     
    </Col>
  
    </>
    
  );
};
export default Images;
