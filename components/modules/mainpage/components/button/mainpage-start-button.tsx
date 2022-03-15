import {FC, useState} from 'react';
import { Button } from 'antd';
import Link from 'next/link';

type IMainpageStartButtonProp = {};

export const MainpageStartButton: FC<IMainpageStartButtonProp> = () => {
  return (
    <Link href="/survey">
      <a>
        <Button type="primary" shape="round" size="large">
          지금 바로 시작하기
        </Button>
      </a>
    </Link>
  );

};
