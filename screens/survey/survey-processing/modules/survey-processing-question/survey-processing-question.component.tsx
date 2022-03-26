import { Typography, Divider } from 'antd';
import { FC } from 'react';

type ISurveyProcessingQuestionComponentProp = { data: string };

const { Title } = Typography;

export const SurveyProcessingQuestionComponent: FC<ISurveyProcessingQuestionComponentProp> = ({
  data,
}) => {
  return (
    <Title level={3} style={{ textAlign: 'center' }}>
      {data}
    </Title>
  );
};
