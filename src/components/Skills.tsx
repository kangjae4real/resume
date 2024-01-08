import styled from "styled-components";
import React from "react";
import ContentLayout from "./layouts/ContentLayout";
import { SKILLS_LIST } from "../values/skills";
import Title from "./Title";
import useWindowSize from "../hooks/useWindowSize";
import { MOBILE_BREAK_POINT, MOBILE_MEDIA_QUERY } from "../styles/mediaQuery";

const Container = styled.div`
  padding: 42px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 14px;
`;

const ListContainer = styled.div``;

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

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const { width } = useWindowSize();

  return (
    <ContentLayout title="다루는 기술">
      {SKILLS_LIST.map(({ title, detail }, index) => (
        <Container key={index}>
          <TitleContainer>
            <Title fontSize={width > MOBILE_BREAK_POINT ? "32px" : "28px"}>{title}</Title>
          </TitleContainer>

          <ListContainer>
            <List>
              {detail.map((item, index) => (
                <Item key={index}>
                  <ItemText>{item}</ItemText>
                </Item>
              ))}
            </List>
          </ListContainer>
        </Container>
      ))}
    </ContentLayout>
  );
};

export default Skills;
