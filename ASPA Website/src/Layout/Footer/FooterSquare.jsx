import React from "react";
import { FooterSquareStyled } from "./footer.styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSquare = () => {
  return (
    <FooterSquareStyled>
      <h4>ASPA Enterprise</h4>
      <p className="mb-3">H206, Three Jewels Branch Office:103, Tahmane Terrace</p>
      <p className="mb-1">Phone: +91 7020530127</p>
      <p className="mb-1">Email: aspaenterprises7@gmail.com</p>
      <ul>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </FooterSquareStyled>
  );
};

export default FooterSquare;
