import { Row, Space } from 'antd';
import axios from 'axios';
import { FC } from 'react';
import styled from 'styled-components';
import * as data from './survey-processing-answer.data';

type ISurveyProcessingAnswerComponentProp = {
  currentOrder: number;
  setCurrentOrder: any;
};
const HoverSpace = styled(Space)`
  :hover {
    color: #efea06;
    cursor: pointer;
  }
`;
export const SurveyProcessingAnswerComponent: FC<ISurveyProcessingAnswerComponentProp> = ({
  currentOrder,
  setCurrentOrder,
}) => {
  const handleClickButton = (item: any) => {
    setCurrentOrder(item.next_question_order);
  };

  const saveUserAnswer = async (currentOrder: number, item: any) => {
    // const response = {
    //   visitor_id: "visitor_id", // visitor_id 를 어디서 구하냥..
    //   question: currentOrder,
    //   answer: item.order,
    //   created_at: "yyyy-MM-dd HH:mm:ss"
    // };
    const response = await axios.post('http://localhost:8080/answer/club', {
      visitor_id: "visitor_id", // visitor_id 를 어디서 구하냥..
      question: currentOrder,
      answer: item.order,
      created_at: "yyyy-MM-dd HH:mm:ss"
    });
    console.log(response);
  }
  const arrangeItemByRow = (currentOrder: number) => (
    <Row key={data.question_answer_data[currentOrder].length} gutter={[16, 24]}>
      {data.question_answer_data[currentOrder].map((item) => (
        <HoverSpace
          key={item.order}
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
            saveUserAnswer(currentOrder, item);
            handleClickButton(item); // 두 가지 동작이 실행되는데, 함수 이름이 너무 포괄적이진 않을까?
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: item.option }} />
        </HoverSpace>
      ))}
    </Row>
  );

  return <>{arrangeItemByRow(currentOrder)}</>;
};
