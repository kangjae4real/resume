import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/Hero";
import Career from "../components/Career";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <Hero />
      <Career />
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="최강재 이력서" />;
