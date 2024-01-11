import styled, { css } from "styled-components";
import React from "react";
import { MOBILE_MEDIA_QUERY } from "../styles/mediaQuery";

interface TextProps extends Pick<React.CSSProperties, "fontSize"> {
  $innerContent?: boolean;
}

const Text = styled.p<TextProps>`
  font-weight: bold;

  ${({ fontSize, $innerContent }) =>
    $innerContent
      ? css`
          font-size: 28px;
          margin-bottom: 14px;

          ${MOBILE_MEDIA_QUERY} {
            font-size: 32px;
          }
        `
      : css`
          font-size: ${fontSize ?? "42px"};
        `}
`;

const PeriodMark = styled.span`
  color: #20e3b2;
`;

export interface TitleProps extends TextProps {
  children: React.ReactNode;
  withPeriodMark?: boolean;
  style?: React.CSSProperties;
}

const Title: React.FC<TitleProps> = ({ children, fontSize, withPeriodMark = false, $innerContent = false, style }) => {
  return (
    <Text fontSize={fontSize} $innerContent={$innerContent} style={style}>
      {children}
      {withPeriodMark && <PeriodMark>.</PeriodMark>}
    </Text>
  );
};

export default Title;
