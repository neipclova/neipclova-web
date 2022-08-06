import { Space } from 'antd';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import PathEnum from 'utils/paths';
import Api from 'utils/util';

import {
  enum_visitor_type,
  IOptionData,
  IResultSurveyTypePostRequestData,
  IResultSurveyTypePostResponseData,
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
  const [visitorSurveyResultId, setVisitorSurveyResultId] = useState<number>(-1);
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
    if (!currentOrder) {
      // result api가 여기서 호출되어야 하나..?
      const request: IResultSurveyTypePostRequestData = {
        visitor_survey_result_id: visitorSurveyResultId,
      };
      const response = Api.post<IResultSurveyTypePostResponseData>(PathEnum.SURVEY_RESULT);
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
            visitorSurveyResultId={visitorSurveyResultId}
            options={options}
          />
        </Space>
      )}
    </SurveyProcessingLayout>
  );
};
