import { Row, Space } from 'antd';
import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import {
  enum_visitor_type,
  IAnswerRequestData,
  IOptionData,
  IResultSurveyTypePostResponseData,
} from 'components';
import { PathEnum, SURVEY_TYPE } from 'utils';
import Api from 'utils/util';

type ISurveyProcessingAnswerComponentProp = {
  setType: Dispatch<SetStateAction<enum_visitor_type>>;
  setCurrentOrder: Dispatch<SetStateAction<number>>;
  options: IOptionData[];
  visitorSurveyResultId: number;
};
const HoverSpace = styled(Space)`
  :hover {
    color: #efea06;
    cursor: pointer;
  }
`;

export const SurveyProcessingAnswerComponent: FC<ISurveyProcessingAnswerComponentProp> = ({
  setType,
  setCurrentOrder,
  visitorSurveyResultId,
  options,
}) => {
  const router = useRouter();

  const saveUserAnswer = (item: IOptionData) => {
    const request: IAnswerRequestData = {
      visitor_survey_result_id: visitorSurveyResultId,
      question_id: item.question.id,
      option_id: item.id,
    };
    Api.post('/answer', request);
  };

  const postResult = async (visitor_survey_result_id: number) => {
    const request = {
      visitor_survey_result_id,
    };
    const response = await Api.post<IResultSurveyTypePostResponseData>(
      `/result/${SURVEY_TYPE}`,
      null,
      { params: request }
    );
    console.log('Response', response.data);
    return response.data.result;
  };
  if (options.length === 0) {
    console.log('No option error');
  }
  const handleClickButton = async (item: IOptionData) => {
    saveUserAnswer(item);
    if (item.question.questionOrder === 1) {
      switch (item.optionOrder) {
        case 1: {
          setType(enum_visitor_type.STUDENT);
          break;
        }
        case 2: {
          setType(enum_visitor_type.WORKER);
          break;
        }
      }
    }
    if (!item.nextQuestion) {
      const result = await postResult(Number(visitorSurveyResultId));
      router.push(`${PathEnum.SURVEY_RESULT}?result=${result}`);
    }
    setCurrentOrder(item.nextQuestion?.questionOrder);
  };
  const arrangeItemByRow = (options: IOptionData[]) => (
    <Row key={options.length} gutter={[16, 24]}>
      {options.map((item) => (
        <HoverSpace
          key={item.optionOrder}
          size="large"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            border: '1px solid',
            borderRadius: '10px',
            padding: 10,
          }}
          onClick={() => {
            handleClickButton(item);
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: item.option }} />
        </HoverSpace>
      ))}
    </Row>
  );

  return <>{arrangeItemByRow(options)}</>;
};
