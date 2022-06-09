import { Typography } from 'antd';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
// import * as data from './survey-processing-question.data';

type IQuestions = {
  [key: number]: {
    question: {
      [key: string]: string;
    };
    image_uri: string;
  };
};

type IQuestion = {
  question: {
    [key: string]: string;
  };
  image_uri: string;
};

type ISurveyProcessingQuestionComponentProp = {
  setCurrentOrder: any;
  currentOrder: number;
  type: string;
  questions: IQuestions
};

const { Title } = Typography;

export const SurveyProcessingQuestionComponent: FC<ISurveyProcessingQuestionComponentProp> = ({
  setCurrentOrder,
  currentOrder,
  type,
  questions
}) => {
  return (
    <>
      <Title level={3} style={{ color: 'white' }}>
        <div
          dangerouslySetInnerHTML={{ __html: questions[currentOrder].question[type] }}
        />
      </Title>

      {/* <Image src={image.dawn} height={1000} width={1000} /> */}
    </>
  );
};
