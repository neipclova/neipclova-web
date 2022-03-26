import { Typography } from 'antd';
import { FC } from 'react';

type ISurveyProcessingQuestionProp = { data: string };

export const SurveyProcessingQuestion: FC<ISurveyProcessingQuestionProp> = ({ data }) => {
  return <Typography>오늘의 {data}는 무엇인가요?</Typography>;
};
