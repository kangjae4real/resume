import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import ContentLayout from "./layouts/ContentLayout";
import Title from "./Title";
import { MOBILE_MEDIA_QUERY } from "../styles/mediaQuery";

const InnerContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 42px;

  ${MOBILE_MEDIA_QUERY} {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  ${MOBILE_MEDIA_QUERY} {
    width: 30%;
  }
`;

const TextContainer = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${MOBILE_MEDIA_QUERY} {
    width: 70%;
    justify-content: center;
    padding-left: 30px;
  }
`;

const Description = styled.span`
  font-size: 22px;
  line-height: 1.4;
  white-space: normal;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 25px;
    white-space: pre-wrap;
  }
`;

const HERO_DESCRIPTION = `4년차 프론트엔드 개발자로 일하고 있습니다.\n스타트업 기업에서 React, Next.js 등을 메인으로 프로덕션\n서비스를 개발 및 운영한 경험이 있으며 좋은 커뮤니케이션과\n좋은 개발자 경험에 관심이 많아 고민하고 노력해 오고있습니다.`;

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <ContentLayout>
      <InnerContainer>
        <ImageContainer>
          <StaticImage src="../images/profile-image.jpg" alt="My Profile Image" layout="fullWidth" />
        </ImageContainer>

        <TextContainer>
          <Title withPeriodMark>
            안녕하세요, <br />
            프론트엔드 개발자 <br />
            최강재입니다
          </Title>

          <Description>{HERO_DESCRIPTION}</Description>
        </TextContainer>
      </InnerContainer>
    </ContentLayout>
  );
};

export default Hero;
