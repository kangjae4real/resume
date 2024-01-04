import { graphql, useStaticQuery } from "gatsby";

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

interface SiteMetadataResponse {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<SiteMetadataResponse>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
