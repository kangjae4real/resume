export interface Career {
  id: number;
  companyNames: string[];
  team: string;
  job: string;
  particulars?: string;
  links?: string[];
  startedAt: string;
  endAt: string;
}

export const CAREER_LIST: Career[] = [
  {
    id: 1,
    companyNames: ["탱커", "제노임펙트"],
    team: "Techne 1 팀",
    job: "Front-end Developer",
    particulars:
      "탱커의 경영난으로 기술팀 전원 제노임펙트로 넘어가게 되었습니다.\n소속은 바뀌었지만, 여전히 탱커에서의 업무를 진행하고 있습니다.\n(인수)",
    links: ["https://tanker.ai", "https://www.xenoimpact.com"],
    startedAt: "2021.09",
    endAt: "현재",
  },
  {
    id: 2,
    companyNames: ["팀블랙버드(CryptoQuant)"],
    team: "Live 팀",
    job: "Front-end Developer",
    links: ["https://cryptoquant.com"],
    startedAt: "2020.09",
    endAt: "2021.08",
  },
];

export interface Detail {
  title: string;
  description: string;
  link?: string;
  skills: string[];
  work: string[];
  improve: string[];
  startedAt: string;
  endAt: string;
}

export interface CareerDetail {
  id: number;
  detail: Detail[];
}

export const CAREER_DETAIL_LIST: CareerDetail[] = [
  {
    id: 1,
    detail: [
      {
        title: "IBK기업은행 AI 인사배치 관리자 SPA 개발",
        description:
          "IBK 기업은행에서 새로이 진행하는 AI 인사배치 프로젝트입니다.\n개발된 AI 모델의 기능을 활용할 수 있도록 하는 반응형 Single Page Application 입니다.",
        skills: ["TypeScript", "React", "styled-components", "axios"],
        work: [
          "은행원 배치 프로세스 등록 & 조회 & 수정 기능",
          "배치 프로세스 시작 & 배포 기능",
          "배치 제약조건, 가중치 설정 및 조정 로직 개발",
          "배치 결과 Report Export 기능",
        ],
        improve: [
          "많은 작업자들이 병렬로 프로젝트에 참여하여 개발할 수 있도록\n재활용성 컴포넌트 특정 페이지에 의존하도록 분리",
          "Container, Presentation 컴포넌트를 분리하여 API 요청 코드를\n한곳에서 볼 수 있도록 구조 개선",
          "API 요청을 할 때에 인증된 axios 인스턴스를 사용할 수 있도록\nuseApi Custom Hook 개발",
          "수평적으로 흩어져 있던 CSS 코드를 특정 그룹으로 묶어\nstyled-components 사용할 수 있도록 개선",
        ],
        startedAt: "2023.09",
        endAt: "현재",
      },
      {
        title: "Doczip",
        description: "유료사용자 50,000명의 서비스로 반응형 웹\n주소지 검색 및 공부 열람 서비스입니다.",
        link: "https://doczip.kr",
        skills: ["TypeScript", "React", "styled-components", "axios"],
        work: [
          "주소지를 검색하여 해당 물건의 각종 정보를\n확인할 수 있는 Report 기능을 개발",
          "사이트 전반적인 UI/UX 개발",
          "등기부등본, 건축물대장, 토지대장 등 부동산 계약에\n필요한 공적장부 열람 및 발급 기능 개발",
          "사이트 리뉴얼 참여",
        ],
        improve: [
          "Open API Generator 도입으로 생성된 요청코드만\n사용하도록 하여 개발자 경험을 개선",
          "기존에 redux-observable로 작성된 코드를\nredux-thunk로 재작성하여 개발자 경험을 개선",
          "API 요청코드를 컴포넌트에서 Redux Thunk로 옮겨\n로직 분리를 하여 복잡한 코드를 읽기 좋은 코드로 개선",
          "esbuild를 도입하여 기존 1분이상 걸리던 빌드시간을 10초로 단축",
          "컴포넌트 Memoization을 적극활용하여 새로이\n렌더링되는 상황을 방지하여 사용자 경험 개선",
          "MaterialUI를 적극 활용, 커스텀해서 사용하여\n편리하게 개발할 수 있도록 개선",
        ],
        startedAt: "2021.09",
        endAt: "2023.08",
      },
      {
        title: "Blitz Core Web",
        description:
          "탱커의 외부 직원 및 은행원이 간편하게 Blitz API를\n이용할 수 있도록 개발된 반응형 웹 서비스입니다.",
        skills: ["TypeScript", "Next.js", "styled-components", "axios"],
        work: [
          "주소지 검색을 통해 매물을 확인하고 정보를\n확인할 수 있는 기능을 개선",
          "탱커 AI 예측모델을 활용하여 대출금 산정을 진행하고\nReport로 확인할 수 있는 기능을 개발하고 개선",
        ],
        improve: [
          "크롬에서의 화면 프린트 기능을 개선",
          "@media print 를 활용하여 용지 사이즈 설정 및\n숨겨야 되는 컴포넌트를 설정",
          "A4 용지 기준으로 제대로 출력될 수 있도록 코드 개선",
        ],
        startedAt: "2021.09",
        endAt: "2022.11",
      },
      {
        title: "ZipZip",
        description: "탱커의 원스톱 공부열람 API인 Blitz API를 활용하여\n개발된 반응형 웹 매물 검색 서비스입니다.",
        skills: ["TypeScript", "Next.js", "styled-components", "axios"],
        work: ["매물 검색 및 매물 정보 확인 및 커뮤니티 기능을 개선"],
        improve: ["Redux를 사용할때에 불편을 해소할 수 있도록\n자동으로 Action, Selector를 생성해주는 Util 개발"],
        startedAt: "2021.09",
        endAt: "2022.04",
      },
    ],
  },
  {
    id: 2,
    detail: [
      {
        title: "CryptoQuant",
        description: "팀블랙버드의 암호화폐 추세 분석 서비스입니다.",
        link: "https://cryptoquant.com",
        skills: ["TypeScript", "Next.js", "styled-components", "axios"],
        work: [
          "서비스 전반적인 반응형 UI/UX 개발",
          "서비스 내 커뮤니티(QuickTake)를 개발하였고,\n글 작성 및 좋아요/댓글 작성 기능을 개발",
          "서비스 내 알람(Alert)을 개선하였고, 특정 데이터의\n조건을 설정하면 조건이 실행될 때 Telegram 알람을\n보내주는 기능 개발",
          "Ant Design Theming을 통해 라이트모드, 다크모드 개발을 진행",
          "react-i18next 라이브러리 사용으로 기존\n영어 사이트의 다국어화를 진행",
        ],
        improve: [
          "Next.js SSG 코드 개선으로 First Contentful Paint 3초에서 1초로 개선",
          "기존 불필요한 Loader를 제거하고 esbuild를 도입하여 개발모드에서\n진행되는 빌드 시간을 1분에서 8초까지 단축",
        ],
        startedAt: "2020.09",
        endAt: "2021.08",
      },
    ],
  },
];
