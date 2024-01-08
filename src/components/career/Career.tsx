import ContentLayout from "../layouts/ContentLayout";
import React from "react";
import { CAREER_LIST } from "../../values/career";
import CareerDetail from "./CareerDetail";

interface CareerProps {}

const Career: React.FC<CareerProps> = () => {
  return (
    <ContentLayout title="경력">
      {CAREER_LIST.map((value, index) => (
        <CareerDetail key={index} {...value} />
      ))}
    </ContentLayout>
  );
};

export default Career;
