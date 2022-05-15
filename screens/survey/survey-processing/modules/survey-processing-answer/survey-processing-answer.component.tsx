import { RadioChangeEvent, Row, Col, Button } from 'antd';
import { FC, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import * as data from './survey-processing-answer.data';
import axios from 'axios';

type ISurveyProcessingAnswerComponentProp = {
  currentOrder: number;
  setCurrentOrder: any;
};

const HoverButton = styled(Button)`
  :hover {
    color: #8b00ff;
  }
`;

export const SurveyProcessingAnswerComponent: FC<ISurveyProcessingAnswerComponentProp> = ({
  currentOrder,
  setCurrentOrder,
}) => {
  const [value, setValue] = useState(1);
  const [type, setType] = useState('');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleClickButton = (item: any) => {
    setCurrentOrder(item.next_question_order);
  };

  const startUser = async() => {
    console.log("asd");
    const response = await axios.post('http://localhost:8080/start',{
      ip_address: "127.0.0.0",
      agent_os: "window",
      agent_browser: "chrome",
      access_url: "https://haklim",
    });
    console.log(response);
  }


  const arrangeItemByRow = (currentOrder: number) => (
    <Row key={data.question_answer_data[currentOrder].length} gutter={[16, 24]}>
      {data.question_answer_data[currentOrder].map((item) => {
        return (
          <Button
            key={item.order}
            size="large"
            shape="round"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
            block
            onClick={() => {handleClickButton(item); startUser()}}
          >
            {item.option}
          </Button>
        );
      })}
    </Row>
  );

  return (
    <>{arrangeItemByRow(currentOrder)}</>

    // <Radio.Group onChange={onChange} value={value}>
    //   <Space direction="vertical">
    //     <Radio value={1} style={{ color: BAR_COLOR_SPECTRUM[1] }}>
    //       한식
    //     </Radio>
    //     <Radio value={2} style={{ color: BAR_COLOR_SPECTRUM[2] }}>
    //       양식
    //     </Radio>
    //     <Radio value={3} style={{ color: BAR_COLOR_SPECTRUM[3] }}>
    //       중식
    //     </Radio>
    //   </Space>
    // </Radio.Group>
  );
};
