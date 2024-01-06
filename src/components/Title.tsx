import styled from "styled-components";
import React from "react";

interface TextProps extends Pick<React.CSSProperties, "fontSize"> {}

const Text = styled.h1<TextProps>`
  font-size: ${({ fontSize }) => fontSize ?? "42px"};
`;

const PeriodMark = styled.span`
  color: #20e3b2;
  margin-left: 3px;
`;

export interface TitleProps extends TextProps {
  children: React.ReactNode;
  withPeriodMark?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, fontSize, withPeriodMark = false }) => {
  return (
    <Text fontSize={fontSize}>
      {children}
      {withPeriodMark && <PeriodMark>.</PeriodMark>}
    </Text>
  );
};

export default Title;
