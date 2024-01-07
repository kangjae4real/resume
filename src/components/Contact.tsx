import styled from "styled-components";
import React from "react";
import ContentLayout from "./layouts/ContentLayout";
import { MOBILE_MEDIA_QUERY } from "../styles/mediaQuery";
import { CONTACT_LIST } from "../values/contact";

const Container = styled.div`
  padding-bottom: 42px;
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

const ItemAnchor = styled.a`
  font-size: 15px;
  line-height: 1.4;
  white-space: normal;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 17px;
    white-space: pre-wrap;
  }
`;

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <ContentLayout title="연락처">
      <Container>
        <ListContainer>
          <List>
            {CONTACT_LIST.map(({ name, link }) => (
              <Item>
                <ItemAnchor href={link} target="_blank">
                  {name}
                </ItemAnchor>
              </Item>
            ))}
          </List>
        </ListContainer>
      </Container>
    </ContentLayout>
  );
};

export default Contact;
