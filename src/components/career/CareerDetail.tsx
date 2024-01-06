import styled from "styled-components";
import React from "react";
import { Career } from "../../values/career";
import Title from "../Title";
import CareerWorkInfo from "./CareerWorkInfo";

const Container = styled.div`
  &:not(:first-of-type) {
    margin-top: 14px;
  }
`;

const CompanyInfo = styled.div``;

const CompanyInnerContainer = styled.div`
  font-size: 14px;
`;

const CompanyTeam = styled.span`
  font-size: 14px;
`;

const CompanyJob = styled.span`
  font-size: 14px;
`;

const CompanyDateContainer = styled.div``;

const CompanyDate = styled.span`
  font-size: 14px;
`;

const WorkInfo = styled.div``;

interface CareerDetailProps extends Career {}

const CareerDetail: React.FC<CareerDetailProps> = ({ id, companyName, team, job, startedAt, endAt }) => {
  return (
    <Container>
      <CompanyInfo>
        <Title innerContent>{companyName}</Title>

        <CompanyInnerContainer>
          <CompanyTeam>{team}</CompanyTeam> / <CompanyJob>{job}</CompanyJob>
          <CompanyDateContainer>
            <CompanyDate>{startedAt}</CompanyDate> - <CompanyDate>{endAt}</CompanyDate>
          </CompanyDateContainer>
        </CompanyInnerContainer>
      </CompanyInfo>

      <WorkInfo>
        <CareerWorkInfo id={id} />
      </WorkInfo>
    </Container>
  );
};

export default CareerDetail;
