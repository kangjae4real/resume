import styled from "styled-components";
import React, { useMemo } from "react";
import Title from "../Title";
import { CAREER_DETAIL_LIST } from "../../values/career";
import { MOBILE_BREAK_POINT, MOBILE_MEDIA_QUERY } from "../../styles/mediaQuery";
import useWindowSize from "../../hooks/useWindowSize";

const Container = styled.div``;

const InnerContainer = styled.div`
  &:not(:first-of-type) {
    margin-top: 21px;
  }
`;

const DateContainer = styled.div``;

const Date = styled.span`
  font-size: 14px;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`;

const Description = styled.pre`
  font-size: 15px;
  white-space: normal;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 17px;
    white-space: pre-wrap;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 14px;
  }

  ${MOBILE_MEDIA_QUERY} {
    &:not(:first-of-type) {
      margin-top: 16px;
    }
  }
`;

const List = styled.ul``;

const Item = styled.li`
  list-style: none;
  position: relative;

  padding: 4px 0 4px 14px;

  &::before {
    position: absolute;
    left: 0;
    content: "•";
    color: #20e3b2;
  }
`;

const ItemText = styled.pre`
  font-size: 15px;
  line-height: 1.4;
  white-space: normal;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 17px;
    white-space: pre-wrap;
  }
`;

interface CareerWorkInfoProps {
  id: number;
}

const CareerWorkInfo: React.FC<CareerWorkInfoProps> = ({ id }) => {
  const { width } = useWindowSize();

  const { detail } = useMemo(() => {
    return CAREER_DETAIL_LIST.filter(({ id: listId }) => id === listId)[0];
  }, [id]);

  return (
    <Container>
      {detail.map(({ title, description, skills, work, improve, startedAt, endAt }) => (
        <>
          <InnerContainer>
            <Title fontSize={width > MOBILE_BREAK_POINT ? "32px" : "21px"} style={{ marginBottom: 14 }}>
              {title}
            </Title>

            <DateContainer>
              <Date>{startedAt}</Date> - <Date>{endAt}</Date>
            </DateContainer>
          </InnerContainer>

          <InnerContainer>
            <ContentContainer>
              <Title fontSize={width > MOBILE_BREAK_POINT ? "21px" : "18px"} style={{ marginBottom: 7 }}>
                설명
              </Title>
              <Description>{description}</Description>
            </ContentContainer>

            <ContentContainer>
              <Title fontSize={width > MOBILE_BREAK_POINT ? "21px" : "18px"} style={{ marginBottom: 7 }}>
                업무
              </Title>
              <List>
                {work.map((item) => (
                  <Item>
                    <ItemText>{item}</ItemText>
                  </Item>
                ))}
              </List>
            </ContentContainer>

            <ContentContainer>
              <Title fontSize={width > MOBILE_BREAK_POINT ? "21px" : "18px"} style={{ marginBottom: 7 }}>
                개선한 점
              </Title>
              <List>
                {improve.map((item) => (
                  <Item>
                    <ItemText>{item}</ItemText>
                  </Item>
                ))}
              </List>
            </ContentContainer>

            <ContentContainer>
              <Title fontSize={width > MOBILE_BREAK_POINT ? "21px" : "18px"} style={{ marginBottom: 7 }}>
                사용한 기술
              </Title>
              <List>
                {skills.map((skill) => (
                  <Item>
                    <ItemText>{skill}</ItemText>
                  </Item>
                ))}
              </List>
            </ContentContainer>
          </InnerContainer>
        </>
      ))}
    </Container>
  );
};

export default CareerWorkInfo;
