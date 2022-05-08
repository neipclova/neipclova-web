type IProps = {
  [key: number]: {
    order: number;
    next_question_order: number | null;
    option: string;
    score?: string;
  }[];
};

export const question_answer_data: IProps = {
  1: [
    {
      order: 1,
      next_question_order: 2,
      option: '학생',
    },
    {
      order: 2,
      next_question_order: 2,
      option: '직장인',
    },
  ],
  2: [
    {
      order: 1,
      next_question_order: 3,
      option: '지하철 타고 버스 환승 한 번이니 거의 40분이겠군',
      score: 'P',
    },
    {
      order: 2,
      next_question_order: 3,
      option: '8시 5분에 출발하는 열차를 타기 위해선 10분전에 출발해야겠군',
      score: 'J',
    },
  ],
  3: [
    {
      order: 1,
      next_question_order: 4,
      option: '먼저 다가가서 인사한다',
      score: 'E',
    },
    {
      order: 2,
      next_question_order: 5,
      option: '행여 마주칠까 걸음 속도를 더 낮춘다',
      score: 'I',
    },
  ],
  4: [
    {
      order: 1,
      next_question_order: 6,
      option: '<b>아씨 아파라~ 뭐야 이건!</b> 괜히 큰소리 친다',
      score: 'T',
    },
    {
      order: 2,
      next_question_order: 6,
      option: '바로 일어나서 아무렇지 않게 말을 건다',
      score: 'F',
    },
  ],
  5: [
    {
      order: 1,
      next_question_order: 6,
      option: '<b>아씨 아파라~ 뭐야 이건!</b> 괜히 큰소리 친다',
      score: 'T',
    },
    {
      order: 2,
      next_question_order: 6,
      option: '바로 일어나서 아무렇지 않게 인사한다',
      score: 'F',
    },
  ],
  6: [
    {
      order: 1,
      next_question_order: 7,
      option: '책상 앞 플래너를 펼친다',
      score: 'J',
    },
    {
      order: 2,
      next_question_order: 7,
      option: '오늘 뭘 해야 할지 여기저기 찾아보며 고민한다',
      score: 'P',
    },
  ],
  7: [
    {
      order: 1,
      next_question_order: 8,
      option: '더 말 나오기 전에 STOP. 방향은 알겠으니 일단 넘어간다',
      score: 'N',
    },
    {
      order: 2,
      next_question_order: 8,
      option: '이해안가는 부분이 있으니 물어본다. "이 부분은 이렇게 구현하면 될까요?"',
      score: 'S',
    },
  ],
  8: [
    {
      order: 1,
      next_question_order: 9,
      option: '그래도 그냥 따라간다',
      score: 'P',
    },
    {
      order: 2,
      next_question_order: 9,
      option: '내가 먹고 싶은 메뉴로 은근히 어필한다',
      score: 'J',
    },
  ],
  9: [
    {
      order: 1,
      next_question_order: 10,
      option: '멜로디가 좋네~ 따라부른다',
      score: 'S',
    },
    {
      order: 2,
      next_question_order: 10,
      option: '와 나도 꽃향 샴푸 써보고 싶다',
      score: 'N',
    },
  ],
  10: [
    {
      order: 1,
      next_question_order: 11,
      option: '가위바위보로 내기를 제안한다',
      score: 'T',
    },
    {
      order: 2,
      next_question_order: 12,
      option: '저번엔 얻어먹었으니 이번엔 내가 산다고 한다',
      score: 'F',
    },
  ],
  11: [
    {
      order: 1,
      next_question_order: 13,
      option: '이게 미쳤나 코카콜라지. 누가 펩시를 콜라로 쳐..라고 생각한다',
      score: 'T',
    },
    {
      order: 2,
      next_question_order: 13,
      option: '그런가 펩시도 맛있나? 라고 생각한다',
      score: 'F',
    },
  ],
  12: [
    {
      order: 1,
      next_question_order: 13,
      option: '이게 미쳤나 코카콜라지. 누가 펩시를 콜라로 쳐..라고 생각한다',
      score: 'T',
    },
    {
      order: 2,
      next_question_order: 13,
      option: '그런가 펩시도 맛있나? 라고 생각한다',
      score: 'F',
    },
  ],
  13: [
    {
      order: 1,
      next_question_order: 14,
      option: '아 저녁에 뭐먹지? 딴 생각한다',
      score: 'N',
    },
    {
      order: 2,
      next_question_order: 14,
      option: 'O.O........',
      score: 'S',
    },
  ],
  14: [
    {
      order: 1,
      next_question_order: 15,
      option: '논리적으로 왜 마음에 안 드는지 설명한다',
      score: 'T',
    },
    {
      order: 2,
      next_question_order: 15,
      option: '반박하면 분위기가 안 좋아질 것 같아 일단 넘어간다',
      score: 'F',
    },
  ],
  15: [
    {
      order: 1,
      next_question_order: 16,
      option: '다른 사람이 축하해 줄 때까지 기다린다',
      score: 'I',
    },
    {
      order: 2,
      next_question_order: 16,
      option: '보자마자 단톡방에서 생일을 축하해준다',
      score: 'E',
    },
  ],
  16: [
    {
      order: 1,
      next_question_order: 17,
      option: '적절한 비유와 예시를 기반으로 설명한다',
      score: 'N',
    },
    {
      order: 2,
      next_question_order: 17,
      option: '뒷받침할만 객관적 지표나 자료룰 기반으로 설명한다',
      score: 'S',
    },
  ],
  17: [
    {
      order: 1,
      next_question_order: 18,
      option: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 바로 ㅋ부터 친다',
      score: 'E',
    },
    {
      order: 2,
      next_question_order: 18,
      option: '내가 쓸 답변을 읽고 또 읽고, 고치고 또 고친다..',
      score: 'I',
    },
  ],
  18: [
    {
      order: 1,
      next_question_order: 19,
      option: '할 게 많아지려나? 불안감에 휩싸인다',
      score: 'S',
    },
    {
      order: 2,
      next_question_order: 19,
      option: '결혼하시나?',
      score: 'N',
    },
  ],
  19: [
    {
      order: 1,
      next_question_order: 20,
      option: '놀라서 언제부터 그만할거냐고 물어본다',
      score: 'T',
    },
    {
      order: 2,
      next_question_order: 20,
      option: '놀라서 무슨 일 있냐고 물어본다',
      score: 'F',
    },
  ],
  20: [
    {
      order: 1,
      next_question_order: null,
      option: '집 편하게 갈 생각에 싱글벙글하다',
      score: 'E',
    },
    {
      order: 2,
      next_question_order: null,
      option: '없는 약속을 만들어낸다',
      score: 'I',
    },
  ],
};
