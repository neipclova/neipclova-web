import { Space } from 'antd';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import {
  enum_visitor_type,
  IOptionData,
  ISurveyData,
  SurveyProcessingLayout,
} from '../../../components';

import { SurveyProcessingAnswerComponent, SurveyProcessingQuestionComponent } from './modules';

type ISurveyProcessingScreenProps = {
  surveyData: ISurveyData;
};

export const SurveyProcessingScreen: FC<ISurveyProcessingScreenProps> = ({ surveyData }) => {
  const router = useRouter();
  const [currentOrder, setCurrentOrder] = useState(1);
  const query = router.query;

  const { visitor_survey_result_id: visitorSurveyResultId } = router.query;
  const [type, setType] = useState<enum_visitor_type>(enum_visitor_type.STUDENT);
  const [question, setQuestion] = useState<string>(
    surveyData.questions.find((question) => question.questionOrder === currentOrder)?.question[
      type
    ] ?? ''
  );
  const [options, setOptions] = useState<IOptionData[]>(
    surveyData.options.filter((option) => option.question.questionOrder === currentOrder)
  );

  useEffect(() => {
    setQuestion(
      surveyData.questions.find((question) => question.questionOrder === currentOrder)?.question[
        type
      ] ?? ''
    );
    setOptions(
      surveyData.options.filter((option) => option.question.questionOrder === currentOrder)
    );
  }, [currentOrder, type]);

  return (
    <SurveyProcessingLayout>
      {currentOrder && (
        <Space
          direction="vertical"
          style={{
            padding: 30,
            color: 'white',
            textAlign: 'center',
            wordBreak: 'keep-all',
          }}
        >
          <SurveyProcessingQuestionComponent question={question} />
          <SurveyProcessingAnswerComponent
            setType={setType}
            setCurrentOrder={setCurrentOrder}
            visitorSurveyResultId={Number(visitorSurveyResultId)}
            options={options}
          />
        </Space>
      )}
    </SurveyProcessingLayout>
  );
};
