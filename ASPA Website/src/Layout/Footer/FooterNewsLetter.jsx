import React from "react";
import {FooterNewsLetterStyled} from "./footer.styled";
import {Form} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";

const FooterNewsLetter = () => {
  return (
    <FooterNewsLetterStyled>
      <h4>Our Newsletter</h4>
      <p>
        Really wish to hear from us, please Subscribe!
      </p>
      <div className="subscribe-form">
        <Form.Control type="text" />
        <CustomButton type="regular-pricing-btn">Subscribe</CustomButton>
      </div>
    </FooterNewsLetterStyled>
  );
};

export default FooterNewsLetter;
