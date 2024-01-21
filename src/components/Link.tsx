import React from "react";
import styled, { css } from "styled-components";
import { MOBILE_MEDIA_QUERY } from "../styles/mediaQuery";

interface AnchorProps {
  $withUnderline?: boolean;
}

const Anchor = styled.a<AnchorProps>`
  position: relative;
  font-size: 28px;
  font-weight: bold;
  color: #000 !important;
  text-decoration: none;

  ${({ $withUnderline }) =>
    $withUnderline &&
    css`
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 4px;
        background: #000;
        bottom: -5px;
        left: 0;
      }
    `}

  ${MOBILE_MEDIA_QUERY} {
    font-size: 32px;
  }
`;

interface LinkProps extends AnchorProps {
  href: string;
  children: React.ReactNode | string;
}

const Link: React.FC<LinkProps> = ({ href, children, $withUnderline }) => {
  return (
    <Anchor href={href} $withUnderline={$withUnderline} target="_blank">
      {children}
    </Anchor>
  );
};

export default Link;
