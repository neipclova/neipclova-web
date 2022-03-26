import { Typography } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import zzangoo from './images/zzangoo.png';
type ISurveyResultTitleComponentProp = {};

export const SurveyResultTitleComponent: FC<ISurveyResultTitleComponentProp> = () => {
  return (
    <>
      <Typography>당신은 바로~~~</Typography>
      <Image src={zzangoo} alt="짱구그림" />
    </>
  );
};
