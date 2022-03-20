import React, { FC, useRef } from 'react';
import { Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

type ISurveyHomeDetailURLButtonProp = {};

export const SurveyHomeDetailURLButton: FC<ISurveyHomeDetailURLButtonProp> = () => {
  const copyLinkRef = useRef();
  return (
        <Button type="primary" icon={<LinkOutlined />} size="large">
          &nbsp;&nbsp;URL 복사하기
        </Button>
  );

};
