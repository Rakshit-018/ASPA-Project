import React from "react";
import { Col, Image } from "react-bootstrap";
import SectionContainer from "../../components/SectionContainer";
import AboutBlocks from "./AboutBlocks";
import AboutSponsor from "./AboutSponsor";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RowReversedStyled } from "./About.styled";
import { paragraphs } from "./aboutData";
import aboutImage from "../../assets/about.jpg";

const About = () => {
  return (
    <>
      <SectionContainer id={"about"} secName={"about-sec"}>
        <RowReversedStyled className="my-2">
          <Col lg={6} className="mb-3">
            <h2>
              Why Choose Us
            </h2>
            <p className="fst-italic">
              "Aspa Enterprises: Your Catalyst for Excellence. Since 2018, we've pioneered high-quality, cost-effective solutions in jaggery and specialty chemicals, shaping industries with our expert advisory services."
            </p>
            <ul>
              {paragraphs.map((par, idx) => (
                <li className="mb-3" key={idx}>
                  <AiOutlineCheckCircle
                    className="me-1"
                    size={24}
                    color={"var(--ds-blood)"}
                  />
                  {par}
                </li>
              ))}
            </ul>
            <p>
              Aspa enterprises is one of the consultancy service providing enterprise which helps our clients to provide high quality, cost effective products and provide advisory services. Aspa enterprises was established in 2018, and till date we have started 2 chemical plant units out of which one of them was a jaggery based company and other was in speciality chemicals.
            </p>
          </Col>
          <Col lg={6} className="mb-3">
            <Image
              src={aboutImage}
              alt="about-img"
              width="100%"
              height="auto"
            />
          </Col>
        </RowReversedStyled>
        <AboutBlocks />
      </SectionContainer>
      <AboutSponsor />
    </>
  );
};

export default About;
