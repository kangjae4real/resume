import styled from "styled-components";
import React from "react";
import Title, { TitleProps } from "./Title";

const Container = styled.div``;

const TitleContainer = styled.div``;

const ContentContainer = styled.div``;

interface TitledWrapperProps {
  title: string;
  titleProps: TitleProps;
  content: string;
}

const TitledWrapper: React.FC<TitledWrapperProps> = ({ title, titleProps, content }) => {
  return (
    <Container>
      <TitleContainer>
        <Title {...titleProps}>{title}</Title>
      </TitleContainer>

      <ContentContainer>{content}</ContentContainer>
    </Container>
  );
};

export default TitledWrapper;
