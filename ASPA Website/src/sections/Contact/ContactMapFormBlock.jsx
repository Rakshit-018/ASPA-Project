import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row, Form} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import {FormStyled} from "./contact.styled";

const ContactMapFormBlock = () => {
  return (
    <Row>
      <Col lg={6} className="my-2">
        <AnimationOnScroll animateIn={`${"animate__fadeInLeft"}`}>
          <Map />
        </AnimationOnScroll>
      </Col>
      <Col lg={6} className="my-2">
        <AnimationOnScroll animateIn={`${"animate__fadeInRight"}`}>
          <ContactForm />
        </AnimationOnScroll>
      </Col>
    </Row>
  );
};

function Map() {
  return (
    <div className="google-map">
      <div
        className="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          minHeight: "300px",
          width: "100%",
        }}
      >
        <div
          className="gmap_canvas"
          style={{
            overflow: "hidden",
            background: " none !important",
            height: "100%",
            width: "100%",
          }}
        >
          <iframe
            title="This is a unique title"
            width="100%"
            height="100%"
            id="gamp_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5673480428586!2d73.87890457931934!3d18.45794312630243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb1b37dfcadd%3A0x56b9d4b16085873c!2sVIIT%20COLLEGE!5e0!3m2!1sen!2sin!4v1701201039122!5m2!1sen!2sin" 
            style={{minHeight: "500px"}}
          />
        </div>
      </div>
    </div>
  );
}
function ContactForm() {
  return (
    <FormStyled>
      <Row>
        <Col lg={6}>
          <Form.Control size="lg" type="text" placeholder="Your Name" />
        </Col>
        <Col lg={6}>
          <Form.Control size="lg" type="email" placeholder="Your Email" />
        </Col>
        <Col lg={12}>
          <Form.Control size="lg" type="text" placeholder="Subject" />
        </Col>
        <Col lg={12}>
          <Form.Control as="textarea" rows={5} placeholder="Message" />
        </Col>
      </Row>
      <div className="text-center">
        <CustomButton className="my-3" type={"regular-pricing-btn"}>
          Send Message
        </CustomButton>
      </div>
    </FormStyled>
  );
}

export default ContactMapFormBlock;
