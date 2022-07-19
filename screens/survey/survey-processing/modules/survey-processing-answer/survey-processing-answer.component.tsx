import { Row, Space } from 'antd';
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
            handleClickButton(item);
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: item.option }} />
        </HoverSpace>
      ))}
    </Row>
  );

  return <>{arrangeItemByRow(currentOrder)}</>;
};
