import { Row, Space } from 'antd';
import axios from 'axios';
import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import { enum_visitor_type, IOptionData } from 'components';

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
  const saveUserAnswer = async (currentOrder: number, item: any) => {
    const response = await axios.post('http://localhost:8080/answer', {
      visitorSurveyResultId: visitorSurveyResultId,
      questionId: currentOrder,
      optionId: item.order,
    });
    console.log(response);

    // // 테스트코드
    // const response = {
    //   visitor_id: visitorId,
    //   question: currentOrder,
    //   answer: item.order,
    //   created_at: "yyyy-MM-dd HH:mm:ss"
    // };
    // console.log(response);
    // // 테스트코드
  };

  if (options.length === 0) {
    console.log('No option error');
  }
  const handleClickButton = (item: IOptionData) => {
    saveUserAnswer(item.question.questionOrder, item);
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
