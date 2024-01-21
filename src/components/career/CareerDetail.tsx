import styled from "styled-components";
import React, { useMemo } from "react";
import { Career } from "../../values/career";
import Title from "../Title";
import CareerWorkInfo from "./CareerWorkInfo";
import { MOBILE_MEDIA_QUERY } from "../../styles/mediaQuery";
import Link from "../Link";

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

const TitleContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const Crumb = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #000 !important;
  text-decoration: none;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 32px;
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

const Particulars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 14px;
`;

const ParticularsTitle = styled.span`
  font-size: 20px;
  line-height: 1.4;
  white-space: normal;
  font-weight: bold;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 24px;
    white-space: pre-wrap;
  }
`;

const ParticularsContent = styled.pre`
  font-size: 14px;
  line-height: 1.4;
  white-space: normal;

  ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
    white-space: pre-wrap;
  }
`;

const WorkInfo = styled.div`
  ${MOBILE_MEDIA_QUERY} {
    width: 50%;
  }
`;

interface CareerDetailProps extends Career {}

const CareerDetail: React.FC<CareerDetailProps> = ({
  id,
  companyNames,
  team,
  job,
  particulars,
  links,
  startedAt,
  endAt,
}) => {
  const title = useMemo(() => {
    if (!links || !links?.length) {
      return;
    }

    return (
      <TitleContainer>
        {links.map((link, index) => (
          <>
            {index !== 0 && <Crumb> & </Crumb>}
            <Link href={link} withUnderline>
              {companyNames[index]}
            </Link>
          </>
        ))}
      </TitleContainer>
    );
  }, [companyNames, links]);

  return (
    <Container>
      <CompanyInfo>
        {title}

        <CompanyInnerContainer>
          <div>
            <CompanyTeam>{team}</CompanyTeam> / <CompanyJob>{job}</CompanyJob>
          </div>

          <CompanyDateContainer>
            <CompanyDate>{startedAt}</CompanyDate> - <CompanyDate>{endAt}</CompanyDate>
          </CompanyDateContainer>

          {particulars && (
            <Particulars>
              <ParticularsTitle>특이사항</ParticularsTitle>
              <ParticularsContent>{particulars}</ParticularsContent>
            </Particulars>
          )}
        </CompanyInnerContainer>
      </CompanyInfo>

      <WorkInfo>
        <CareerWorkInfo id={id} />
      </WorkInfo>
    </Container>
  );
};

export default CareerDetail;
