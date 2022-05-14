import { Typography, Divider } from 'antd';
import { FC } from 'react';
import * as data from './survey-processing-question.data';

import Image from 'next/image';
import * as image from '../../../../../assets/images';

type ISurveyProcessingQuestionComponentProp = {
  setCurrentOrder: any;
  currentOrder: number;
  type: string;
};

const { Title } = Typography;

export const SurveyProcessingQuestionComponent: FC<ISurveyProcessingQuestionComponentProp> = ({
  setCurrentOrder,
  currentOrder,
  type,
}) => {
  console.log('question', type);
  return (
    <>
      <Title level={3} style={{ textAlign: 'center' }}>
        {data.question_data[currentOrder].question[type]}
      </Title>

      {/* <Image src={image.dawn} height={1000} width={1000} /> */}
    </>
  );
};
