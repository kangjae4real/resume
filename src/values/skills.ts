export interface Skills {
  title: string;
  detail: string[];
}

export const SKILLS_LIST: Skills[] = [
  {
    title: "Front-end",
    detail: [
      "Search Engine Optimization(SEO)을 고민하고 개발하고 적용해본 경험이 있습니다.",
      "IE11, Chrome, Safari 등 크로스 브라우징을 고려하고 코드를 작성하고 개선해본 경험이 있습니다.",
      "반응형/적응형 웹을 구현하고 개선할 수 있습니다.",
    ],
  },
  {
    title: "JavaScript",
    detail: [
      "JavaScript & TypeScript을  주력으로 개발합니다.",
      "ES6 이후 문법을 이해하고 활용할 수 있습니다.",
      "유틸리티 타입, 제네릭 등 타입시스템을 제대로 이해하고 활용할 수 있습니다.",
    ],
  },
  {
    title: "React & Next.js",
    detail: [
      "Client Side Rendering & Server Side Rendering 모두 대응하고 서비스를 개발할 수 있습니다.",
      "Functional Component, hooks을 제대로 이해하고 활용할 수 있습니다.",
      "항상 성능을 고민합니다. Memoization이나 반복콜등을 신경쓰며 사용자가 좋은 서비스를 개발할 수 있습니다.",
    ],
  },
  {
    title: "DevOps",
    detail: [
      "반복적인 업무를 해소할 수 있는 Node.js CLI 툴링도구를 개발하는 것을 즐기고 잘할 수 있습니다.",
      "Docker와 Docker Compose를 이해하고 활용할 수 있습니다.\n모든 Application(FE, BE, NGINX)을 Dockerize하여 개발합니다.",
      "AWS EC2, Microsoft Azure 인스턴스들을 활용하여 컨테이너를 띄워 배포할 수 있습니다.",
    ],
  },
  {
    title: "Communication",
    detail: [
      "안좋은 결과를 항상 경계합니다. 좋은 결과를 낼 수 있도록 많은 소통을 하고 그것을 즐깁니다.",
      "많이 경청하고 때론 많은 의견을 내며 좋은 영향력을 끼칠 수 있도록 노력합니다.",
      "글 작성을 즐깁니다. 쉽게 풀어써 모두가 빠른 이해를 도울 수 있도록 하고 있습니다.",
      "기획자, 디자이너, 백엔드 개발자와의 소통을 정말 많이 합니다. 이해를 위한 글, 사진, 각종 도구 사용을 즐깁니다.",
    ],
  },
];
