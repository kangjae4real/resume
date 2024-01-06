import styled from "styled-components";
import React from "react";
import { Career } from "../../values/career";
import Title from "../Title";
import CareerWorkInfo from "./CareerWorkInfo";
import { MOBILE_MEDIA_QUERY } from "../../styles/mediaQuery";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
  }
  &:not(:first-of-type) {
    margin-top: 14px;
  }

  ${MOBILE_MEDIA_QUERY} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CompanyInfo = styled.div`
  ${MOBILE_MEDIA_QUERY} {
    width: 50%;
  }
`;

const CompanyInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-top: 14px;

  font-size: 14px;
`;

const CompanyTeam = styled.span`
  font-size: 14px;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`;

const CompanyJob = styled.span`
  font-size: 14px;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`;

const CompanyDateContainer = styled.div`
  font-size: 14px;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`;

const CompanyDate = styled.span`
  font-size: 14px;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`;

const WorkInfo = styled.div`
  ${MOBILE_MEDIA_QUERY} {
    width: 50%;
  }
`;

interface CareerDetailProps extends Career {}

const CareerDetail: React.FC<CareerDetailProps> = ({ id, companyName, team, job, startedAt, endAt }) => {
  return (
    <Container>
      <CompanyInfo>
        <Title innerContent>{companyName}</Title>

        <CompanyInnerContainer>
          <div>
            <CompanyTeam>{team}</CompanyTeam> / <CompanyJob>{job}</CompanyJob>
          </div>

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
