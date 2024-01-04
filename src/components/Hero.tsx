import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div``;

const TextContainer = styled.div`
  margin-top: 16px;
`;

const Title = styled.h1``;

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Container>
      <ImageContainer>
        <StaticImage src="../images/profile-image.jpg" alt="My Profile Image" layout="fullWidth" />
      </ImageContainer>

      <TextContainer>
        <Title>안녕하세요</Title>
      </TextContainer>
    </Container>
  );
};

export default Hero;
