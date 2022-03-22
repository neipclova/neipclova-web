import { Card, Input, Radio, RadioChangeEvent, Space, Row, Col, Button } from 'antd';
import { FC, useState } from 'react';
import { BAR_COLOR_SPECTRUM } from './survey-processing-answer.const';
import styled, { css } from 'styled-components';

type ISurveyProcessingAnswerProp = {};

const HoverButton = styled(Button)`
:hover {
  color: #8B00FF
}
`


export const SurveyProcessingAnswer: FC<ISurveyProcessingAnswerProp> = ({ data, align }) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const arrangeItemByBox = data.map(item => 
      <Col span={12}>
        <HoverButton size='large' style={{display:'flex', justifyContent: 'center', alignItems:'center' , height: 100}} block>{item}</HoverButton>
      </Col>
      )

  
  const arrangeItemByRow = data.map(item =>
    <Row gutter={[16, 24]}>
      <Button size='large' shape='round' style={{display:'flex', justifyContent: 'center', alignItems:'center' , width: '100%'}} block>{item}</Button>
    </Row>
    )

  return (
    <>
        {align === 'box'? 
          <Row gutter={[8,8]}>{arrangeItemByBox}</Row> : 
          arrangeItemByRow}
    </>
    
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
