import { Space } from 'antd';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import PathEnum from 'utils/paths';

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
    console.log(
      surveyData.options.filter((option) => option.question.questionOrder === currentOrder)
    );
    setOptions(
      surveyData.options.filter((option) => option.question.questionOrder === currentOrder)
    );
    if (!currentOrder) {
      router.push(PathEnum.SURVEY_RESULT);
    }
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
            options={options}
          />
        </Space>
      )}
    </SurveyProcessingLayout>
  );
};
