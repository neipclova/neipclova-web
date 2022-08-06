export enum enum_visitor_type {
  STUDENT = 'student',
  WORKER = 'worker',
}

export type IQuestionData = {
  id: number;
  questionOrder: number;
  question: {
    [enum_visitor_type.STUDENT]: string;
    [enum_visitor_type.WORKER]: string;
  };
  imageUri: string;
  surveyType: string;
};

export type IOptionData = {
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
