import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Col, Container, Row } from "react-bootstrap";
import CardItem from "../../components/CardItem";
import { cards } from "./aboutData";

const AboutSponsor = () => {
  return (
    <div
      className="sponsor-container py-5"
      style={{ background: "var(--ds-light-5)" }}
    >
      <Container>

        <h3>Our Approach To Working With Our Clients Provides Significant Benefits</h3>
        <div className="cards-block">
          <Row>
            {cards.map(({ number, title, text }, idx) => (
              <Col sm={12} md={6} lg={4} className="mb-2" key={idx}>
                <AnimationOnScroll animateIn="animate__fadeIn">
                  <CardItem cardNumber={number} cardTitle={title} cardText={text} />
                </AnimationOnScroll>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </div>
  );
};

export default AboutSponsor;
