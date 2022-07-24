import { Row, Space } from 'antd';
import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

import { enum_visitor_type, IOptionData } from 'components';

type ISurveyProcessingAnswerComponentProp = {
  setType: Dispatch<SetStateAction<enum_visitor_type>>;
  setCurrentOrder: Dispatch<SetStateAction<number>>;
  options: IOptionData[];
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
  options,
}) => {
  if (options.length === 0) {
    console.log('No option error');
  }
  const handleClickButton = (item: IOptionData) => {
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
