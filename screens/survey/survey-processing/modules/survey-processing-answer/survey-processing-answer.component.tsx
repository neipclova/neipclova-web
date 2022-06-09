import { Row, Space } from 'antd';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

type IAnswers = {
  [key: number]: {
  order: number;
  next_question_order: number | null;
  option: string;
  score?: string;
}[]
};
type IAnswer = {
order: number;
next_question_order: number | null;
option: string;
score?: string;
}[];
type ISurveyProcessingAnswerComponentProp = {
  currentOrder: number;
  setCurrentOrder: any;
  options: IAnswers;
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
  options,
}) => {
  const handleClickButton = (item: any) => {
    setCurrentOrder(item.next_question_order);
  };
  const arrangeItemByRow = (currentOrder: number) => (
    <Row key={options[currentOrder].length} gutter={[16, 24]}>
      {options[currentOrder].map((item) => (
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
