import React from "react";
import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import Title from "@/components/Title";
import { useSpring, animated, config } from "react-spring";

const UnderConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
`;

const AnimatedUnderConstruction = animated(UnderConstructionWrapper);

const fadeInAnimation = {
  opacity: 1,
  from: { opacity: 0 },
  config: config.slow, // Adjust the speed of the animation
};

const slideInAnimation = {
  transform: "translateY(0)",
  from: { transform: "translateY(-50px)" },
  config: config.wobbly, // Adjust the speed and bounciness
};

const CategoriesPage = () => {
  return (
    <>
      <Header />
      <Center>
        <AnimatedUnderConstruction style={fadeInAnimation}>
          <Title style={slideInAnimation}>Categories (Under Construction)</Title>
          <animated.p style={slideInAnimation}>
            This page is under construction. Check back later!
          </animated.p>
        </AnimatedUnderConstruction>
      </Center>
    </>
  );
};

export default CategoriesPage;
