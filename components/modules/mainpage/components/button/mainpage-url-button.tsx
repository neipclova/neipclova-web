import React, { FC, useRef } from 'react';
import { Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

type IMainpageURLButtonProp = {};

export const MainpageURLButton: FC<IMainpageURLButtonProp> = () => {
  const copyLinkRef = useRef();

  // const copy = () => {
  //   const cur = textInput.current
  //   cur.select()
  //   document.execCommand("copy")
  // }
  return (
        <Button type="primary" icon={<LinkOutlined />} size="large">
          &nbsp;&nbsp;URL 복사하기
        </Button>
  );

};
