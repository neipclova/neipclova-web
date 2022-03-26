import { RadioChangeEvent, Row, Col, Button } from 'antd';
import { FC, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';

type ISurveyProcessingAnswerComponentProp = {
  data: string[];
  align: string;
};

const HoverButton = styled(Button)`
  :hover {
    color: #8b00ff;
  }
`;

export const SurveyProcessingAnswerComponent: FC<ISurveyProcessingAnswerComponentProp> = ({
  data,
  align,
}) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleClickButton = (item: string) => {
    console.log('click button:', item);
  };

  const arrangeItemByBox = data.map((item) => (
    <Col key={item} span={12}>
      <HoverButton
        size="large"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}
        block
        onClick={() => handleClickButton(item)}
      >
        {item}
      </HoverButton>
    </Col>
  ));

  const arrangeItemByRow = data.map((item) => (
    <Row key={item} gutter={[16, 24]}>
      <Button
        key={item}
        size="large"
        shape="round"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
        block
        onClick={() => handleClickButton(item)}
      >
        {item}
      </Button>
    </Row>
  ));

  return (
    <>{align === 'box' ? <Row gutter={[8, 8]}>{arrangeItemByBox}</Row> : arrangeItemByRow}</>

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
