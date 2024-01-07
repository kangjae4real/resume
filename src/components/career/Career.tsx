import ContentLayout from "../layouts/ContentLayout";
import React from "react";
import { CAREER_LIST } from "../../values/career";
import CareerDetail from "./CareerDetail";

interface CareerProps {}

const Career: React.FC<CareerProps> = () => {
  return (
    <ContentLayout title="경력">
      {CAREER_LIST.map((value) => (
        <CareerDetail {...value} />
      ))}
    </ContentLayout>
  );
};

export default Career;
