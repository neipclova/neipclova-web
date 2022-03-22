import { Typography, Divider } from 'antd';
import { FC } from 'react';


type ISurveyProcessingQuestionProp = { data: string };

const { Title } = Typography;

export const SurveyProcessingQuestion: FC<ISurveyProcessingQuestionProp> = ({ data }) => {
  return (
  <>
    <Title level={3} style={{textAlign:'center'}}>{data}</Title>

  </>
  );
};
