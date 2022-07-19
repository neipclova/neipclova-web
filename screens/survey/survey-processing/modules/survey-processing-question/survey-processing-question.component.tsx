import { Typography } from 'antd';
import { FC } from 'react';

import * as data from './survey-processing-question.data';

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
  return (
    <>
      <Title style={{ color: 'white' }}>
        <div
          dangerouslySetInnerHTML={{ __html: data.question_data[currentOrder].question[type] }}
        />
      </Title>

      {/* <Image src={image.dawn} height={1000} width={1000} /> */}
    </>
  );
};
