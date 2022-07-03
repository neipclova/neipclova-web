import 'antd/dist/antd.css';
import { Typography } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import tired from '../../../../../assets/images/직장인.png';

type ISurveyHomeTitleModuleProps = {};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.family.title};
`;

const TypographyTitle = styled(Typography.Title)`
  text-align: center;
`;

export const SurveyHomeTitleModule: FC<ISurveyHomeTitleModuleProps> = () => {
  return (
    <Div>
      <TypographyTitle level={4}>꽉 막히는 출근길!</TypographyTitle>
      <TypographyTitle level={2}>나는 어떤 MBTI 유형일까요?</TypographyTitle>
      <TypographyTitle level={1}>지옥의 출근길 탐험 Go!</TypographyTitle>
      <Image src={tired} width={200} height={200} objectFit="contain"></Image>
    </Div>
  );
};
