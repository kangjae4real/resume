import styled, { css } from "styled-components";
import React from "react";

interface TextProps extends Pick<React.CSSProperties, "fontSize"> {
  innerContent?: boolean;
}

const Text = styled.h1<TextProps>`
  ${({ fontSize, innerContent }) =>
    innerContent
      ? css`
          font-size: 28px;
          margin-bottom: 14px;
        `
      : css`
          font-size: ${fontSize ?? "42px"};
        `}
`;

const PeriodMark = styled.span`
  color: #20e3b2;
  margin-left: 3px;
`;

export interface TitleProps extends TextProps {
  children: React.ReactNode;
  withPeriodMark?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, fontSize, withPeriodMark = false, innerContent = false }) => {
  return (
    <Text fontSize={fontSize} innerContent={innerContent}>
      {children}
      {withPeriodMark && <PeriodMark>.</PeriodMark>}
    </Text>
  );
};

export default Title;
