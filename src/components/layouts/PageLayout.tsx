import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  width: 100%;
`;

const Gradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 10px;

  background: #0cebeb;
  background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
  background: linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
`;

const ChildrenContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  padding-top: 10px;
`;

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Gradient />
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </>
  );
};

export default PageLayout;
