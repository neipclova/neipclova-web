import { Row, Space } from 'antd';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

type ISurveyProcessingAnswerComponentProp = {
  currentOrder: number;
  setCurrentOrder: any;
};
type IProps = {
  order: number;
  next_question_order: number | null;
  option: string;
  score?: string;
}[];
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
  const [data, setData] = useState<IProps>([{
    order: 1,
    next_question_order: 2,
    option: "안녕1",
    score: "s"
  },{
    order: 1,
    next_question_order: 2,
    option: "안녕2",
    score: "s"
  }]);
  useEffect(() => {
    let completed = false;
    async function get() {
      const response = await axios({
      url: 'http://localhost:8080/answer',
      method: 'get',
      data:{
        currentOrder: currentOrder
      }});
      if(!completed){
        setData(response.data);
      }
    }
    get();
    return () => {
      completed = true;
    }
  }, [currentOrder]);
  const handleClickButton = (item: any) => {
    setCurrentOrder(item.next_question_order);
  };
  const arrangeItemByRow = (currentOrder: number) => (
    <Row key={data.length} gutter={[16, 24]}>
      {data.map((item) => (
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
