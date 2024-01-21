import { Detail } from "./career";

export interface SideProject extends Detail {}

export const SIDE_PROJECT_LIST: SideProject[] = [
  {
    title: "JYP Partners 사이트 개발",
    description: "Next.js 베이스의 반응형 웹사이트입니다. JYP Partners를 소개하며, 공지사항 등을 볼 수 있습니다.",
    link: "https://jyppartners.com",
    skills: ["TypeScript", "Next.js", "styled-components", "axios"],
    work: [
      "모든 페이지 SSR로 동작하도록 개발",
      "모든 페이지 다국어화 (영문, 한글)",
      "CSS 애니메이션 개발",
      "FE, BE 애플리케이션을 Dockerizing하여 배포",
    ],
    improve: [
      "검색엔진최적화(SEO) 진행",
      "Open API Generator 도입으로 생성된 요청코드만 사용하도록 하여 개발자경험을 개선",
    ],
    startedAt: "2023.09",
    endAt: "2023.10",
  },
  {
    title: "On-Premise Issue Tracker 개발",
    description: "Atlassian Jira/Bitbucket Relay API를 활용한 Issue Tracker 입니다.",
    skills: ["TypeScript", "React", "styled-components", "axios"],
    work: [
      "이슈를 생성하고 조회하며 핸들링하는 페이지 개발",
      "브랜치를 생성하고 조회하는 페이지 개발",
      "커밋 리스트를 조회하며 댓글을 달 수 있는 기능이 포함된 페이지 개발",
      "풀 리퀘스트를 생성하고 조회하는 페이지 개발",
      "저장소 다운로드 기능 개발",
    ],
    improve: [
      "Open API Generator 도입으로 생성된 요청코드만 사용하도록 하여 개발경험을 개선",
      "불필요한 API 요청코드를 제거하여 페이지 로딩속도 기존 10초에서 4초로 단축",
      "기존 Atlassian API 구조 상 요청의 불필요한 베이스 코드가 필요, 이를 새로이 개발된 Relay API를 사용하도록 모두 변경하여 로딩 개선",
      "Atlassian API 댓글 Endpoint는 그 응답이 Front-end에서 사용하기 굉장히 어려운 상태였습니다. 이를, 사용하기 좋게 포맷팅 해주는 스크립트를 개발하여 개발자 경험을 개선하였습니다.",
    ],
    startedAt: "2023.05",
    endAt: "2023.08",
  },
];
