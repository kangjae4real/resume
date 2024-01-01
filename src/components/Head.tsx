import * as React from "react";

interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Front-end Developer Kangjae Choi, Resume" />
      <meta property="og:description" content="Front-end Developer Kangjae Choi, Resume" />
    </>
  );
};

export default Head;
