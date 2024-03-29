import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/Hero";
import Career from "../components/career/Career";
import Activity from "../components/Activity";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import SideProject from "../components/sideProject/SideProject";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <Hero />
      <Career />
      <SideProject />
      <Activity />
      <Skills />
      <Contact />
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="최강재 이력서" />;
