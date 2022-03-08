import { Card, Input, Radio, RadioChangeEvent, Space } from 'antd';
import { FC, useState } from 'react';
import { BAR_COLOR_SPECTRUM } from './survey-processing-answer.const';
type ISurveyProcessingAnswerProp = {};

export const SurveyProcessingAnswer: FC<ISurveyProcessingAnswerProp> = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1} style={{ color: BAR_COLOR_SPECTRUM[1] }}>
          한식
        </Radio>
        <Radio value={2} style={{ color: BAR_COLOR_SPECTRUM[2] }}>
          양식
        </Radio>
        <Radio value={3} style={{ color: BAR_COLOR_SPECTRUM[3] }}>
          중식
        </Radio>
      </Space>
    </Radio.Group>
  );
};
