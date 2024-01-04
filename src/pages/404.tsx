import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div>
      <span>404</span>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="Not found" />;
