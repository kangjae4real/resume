import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import PageLayout from "../components/PageLayout";
import Hero from "../components/Hero";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="최강재 이력서" />;
