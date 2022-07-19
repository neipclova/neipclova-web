type IProps = {
  [key: number]: {
    score_result: {
      [key: string]: string;
    };
  };
};

export const question_data: IProps = {
  1: {
    score_result: {
      student: '[지금도 여행 가려고 계획 짜고 있죠?! 내 사람과 함께 떠나는 여행 동아리]',
      worker: '[지금도 여행 가려고 계획 짜고 있죠?! 내 사람과 함께 떠나는 여행 동호회]',
    },
  },
};
