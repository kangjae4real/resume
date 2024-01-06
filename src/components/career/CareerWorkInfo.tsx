import styled from "styled-components";
import React, { useMemo } from "react";
import { CAREER_DETAIL_LIST } from "../../values/career";

const Container = styled.div``;

interface CareerWorkInfoProps {
  id: number;
}

const CareerWorkInfo: React.FC<CareerWorkInfoProps> = ({ id }) => {
  const { detail } = useMemo(() => {
    return CAREER_DETAIL_LIST.filter(({ id: listId }) => id === listId)[0];
  }, [id]);

  console.log("detail: ", detail);

  return (
    <div>
      <span>asd</span>
    </div>
  );
};

export default CareerWorkInfo;
