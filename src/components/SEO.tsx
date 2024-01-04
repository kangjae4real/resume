import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface SEOProps {
  title?: string;
  description?: string;
  children?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: siteUrl,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      {/*<meta property="og:image" content="/thumbnail.png" />*/}
      {/*<meta property="og:image:secure_url" content="/thumbnail.png" />*/}
      {/*<meta property="og:image:width" content="1200" />*/}
      {/*<meta property="og:image:height" content="630" />*/}
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default SEO;
