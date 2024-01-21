import ContentLayout from "../layouts/ContentLayout";
import React, { useMemo } from "react";
import styled from "styled-components";
import { MOBILE_BREAK_POINT, MOBILE_MEDIA_QUERY } from "../../styles/mediaQuery";
import { SIDE_PROJECT_LIST } from "../../values/sideProject";
import Title from "../Title";
import useWindowSize from "../../hooks/useWindowSize";
import Link from "../Link";

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
  margin-bottom: 14px;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 17px;
    white-space: pre-wrap;
  }
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  ${MOBILE_MEDIA_QUERY} {
    flex-direction: row;
  }
`;

const ListContainer = styled.div`
  width: 100%;

  ${MOBILE_MEDIA_QUERY} {
    &.work {
      width: 40%;
    }
    &.improve {
      width: 40%;
    }
    &.skills {
      width: 20%;
    }
  }
`;

const List = styled.ul`
  margin-top: 4px;
`;

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

interface SideProjectProps {}

const SideProject: React.FC<SideProjectProps> = () => {
  const { width } = useWindowSize();

  return (
    <ContentLayout title="사이드 프로젝트">
      <span>저의 역량개선을 위하여 진행한 프로젝트입니다.</span>
      {SIDE_PROJECT_LIST.map(({ title, description, link, skills, work, improve, startedAt, endAt }, index) => (
        <Container key={index}>
          <TitleContainer>
            {!link ? (
              <Title fontSize={width > MOBILE_BREAK_POINT ? "32px" : "28px"}>{title}</Title>
            ) : (
              <Link href={link} $withUnderline>
                {title}
              </Link>
            )}
          </TitleContainer>

          <ContentContainer>
            <Content>{description}</Content>
          </ContentContainer>

          <Lists>
            <ListContainer className="work">
              <Title fontSize={width > MOBILE_BREAK_POINT ? "20px" : "16px"}>업무</Title>
              <List>
                {work.map((value, index) => (
                  <Item key={index}>
                    <ItemText>{value}</ItemText>
                  </Item>
                ))}
              </List>
            </ListContainer>
            <ListContainer className="improve">
              <Title fontSize={width > MOBILE_BREAK_POINT ? "20px" : "16px"}>개선한 점</Title>
              <List>
                {improve.map((value, index) => (
                  <Item key={index}>
                    <ItemText>{value}</ItemText>
                  </Item>
                ))}
              </List>
            </ListContainer>
            <ListContainer className="skills">
              <Title fontSize={width > MOBILE_BREAK_POINT ? "20px" : "16px"}>사용한 기술</Title>
              <List>
                {skills.map((skill, index) => (
                  <Item key={index}>
                    <ItemText>{skill}</ItemText>
                  </Item>
                ))}
              </List>
            </ListContainer>
          </Lists>
        </Container>
      ))}
    </ContentLayout>
  );
};

export default SideProject;
