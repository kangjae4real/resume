import styled from "styled-components";
import ContentLayout from "./layouts/ContentLayout";
import React from "react";

interface CareerProps {}

const Career: React.FC<CareerProps> = () => {
  return (
    <ContentLayout title="경력">
      <span>carere</span>
    </ContentLayout>
  );
};

export default Career;
