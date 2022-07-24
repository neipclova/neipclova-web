type IQuestionData = {
  id: number;
  questionOrder: number;
  question: {
    student: string;
    worker: string;
  };
  imageUri: string;
  surveyType: string;
};

type IOptionData = {
  id: number;
  optionOrder: number;
  option: string;
  question: IQuestionData;
  nextQuestion: IQuestionData;
  mbtiType: string;
};

export type ISurveyData = {
  questions: IQuestionData[];
  options: IOptionData[];
};
