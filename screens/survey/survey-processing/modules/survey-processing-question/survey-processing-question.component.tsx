import { Typography } from 'antd';
import { FC } from 'react';

type ISurveyProcessingQuestionComponentProp = {
  question: string;
};

const { Title } = Typography;

export const SurveyProcessingQuestionComponent: FC<ISurveyProcessingQuestionComponentProp> = ({
  question,
}) => {
  return (
    <>
      <Title style={{ color: 'white' }}>
        <div dangerouslySetInnerHTML={{ __html: question }} />
      </Title>
    </>
  );
};
