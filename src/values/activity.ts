export interface Activity {
  title: string;
  description: string;
  startedAt: string;
  endAt?: string;
}

export const ACTIVITY_LIST: Activity[] = [
  {
    title: "Blog",
    description:
      "개인 블로그를 운영하고 있습니다. 기술적인 내용을 포함해 일상적인 내용도 게시하고 있습니다.\n블로그는 React와 styled-components로 개발되어 Gatsby로 빌드하고 배포합니다.",
    startedAt: "2023.08",
    endAt: "현재",
  },
  {
    title: "서울특별시 지방기능경기대회 웹디자인 및 개발 직종",
    description:
      "3일의 시간동안 하나의 서비스를 개발하고 평가받았습니다. HTML5, CSS3, JavaScript,\nPHP, MySQL 기술을 활용하여 경쟁을 하였습니다. 최종 5등으로 메달을 획득하지는 못했습니다.",
    startedAt: "2019.04",
  },
  {
    title: "정보처리기능사",
    description: "컴퓨터시스템, DB, 네트워크 등 정보처리 실력을 평가하는 자격입니다. 고등학교 재학 중 취득하였습니다.",
    startedAt: "2020.10",
  },
  {
    title: "웹디자인기능사",
    description:
      "웹디자인 및 웹개발 실력을 평가하는 자격입니다. 고등학교 재학 중 취득하였습니다.\n참고할 수 있는 실기 템플릿 11개를 개발하여 학과 학생 합격률을 대폭 높인 경험이 있습니다.",
    startedAt: "2020.08",
  },
  {
    title: "세명컴퓨터고등학교",
    description: `IT 특성화 고등학교입니다. 꿈을 찾아 일반고등학교가 아닌 특성화고를 진학하였습니다.\n재학 중에는 "기능인재반"이라 불리는 기능경기대회에 출전하는 선수로 활동했었습니다.`,
    startedAt: "2018.03",
    endAt: "2021.03(졸업)",
  },
];
