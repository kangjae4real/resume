import styled from "styled-components";
import React from "react";
import ContentLayout from "./layouts/ContentLayout";
import { ACTIVITY_LIST } from "../values/activity";
import Title from "./Title";
import { MOBILE_BREAK_POINT, MOBILE_MEDIA_QUERY } from "../styles/mediaQuery";
import useWindowSize from "../hooks/useWindowSize";

const Container = styled.div`
  padding: 42px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 14px;
`;

const DateContainer = styled.div`
  margin-bottom: 21px;
`;

const Date = styled.span`
  font-size: 14px;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`;

const ContentContainer = styled.div``;

const Content = styled.pre`
  font-size: 15px;
  line-height: 1.4;
  white-space: normal;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 17px;
    white-space: pre-wrap;
  }
`;

interface ActivityProps {}

const Activity: React.FC<ActivityProps> = () => {
  const { width } = useWindowSize();

  return (
    <ContentLayout title="개인 활동">
      {ACTIVITY_LIST.map(({ title, description, startedAt, endAt }, index) => (
        <Container key={index}>
          <TitleContainer>
            <Title fontSize={width > MOBILE_BREAK_POINT ? "32px" : "28px"}>{title}</Title>
          </TitleContainer>

          <DateContainer>
            <Date>{startedAt}</Date>
            {endAt && <Date> - {endAt}</Date>}
          </DateContainer>

          <ContentContainer>
            <Content>{description}</Content>
          </ContentContainer>
        </Container>
      ))}
    </ContentLayout>
  );
};

export default Activity;
