import styled from "styled-components";
import React from "react";
import Title from "../Title";

const Container = styled.div`
  width: 100%;

  padding: 0 28px;

  &:not(:first-of-type) {
    margin-top: 56px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 32px;
`;

const ChildrenContainer = styled.div``;

interface ContentLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, title }) => {
  return (
    <Container>
      {title && (
        <TitleContainer>
          <Title withPeriodMark>{title}</Title>
        </TitleContainer>
      )}
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default ContentLayout;
