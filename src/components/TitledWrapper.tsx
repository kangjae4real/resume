import styled from "styled-components";
import React from "react";
import Title, { TitleProps } from "./Title";

const Container = styled.div``;

const TitleContainer = styled.div``;

const ContentContainer = styled.div`
  font-size: 15px;
`;

interface TitledWrapperProps {
  title: string;
  content: string;
}

const TitledWrapper: React.FC<TitledWrapperProps> = ({ title, content }) => {
  return (
    <Container>
      <TitleContainer>
        <Title fontSize="28px">{title}</Title>
      </TitleContainer>

      <ContentContainer>{content}</ContentContainer>
    </Container>
  );
};

export default TitledWrapper;
