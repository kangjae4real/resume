import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    src: url("/fonts/Pretendard-Black.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    src: url("/fonts/Pretendard-ExtraBold.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url("/fonts/Pretendard-Bold.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url("/fonts/Pretendard-SemiBold.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url("/fonts/Pretendard-Medium.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src: url("/fonts/Pretendard-Light.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src: url("/fonts/Pretendard-ExtraLight.woff2") format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    src: url("/fonts/Pretendard-Thin.woff2") format("woff2");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, sans-serif;
  }

  a {
    color: #118668;

    &:visited {
      color: #118668;
    }
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  ul ul, ol ul {
    list-style-type: circle;
    list-style-position: inside;
    margin-left: 15px;
  }

  ol ol, ul ol {
    list-style-type: lower-latin;
    list-style-position: inside;
    margin-left: 15px;
  }
`;

export default GlobalStyle;
