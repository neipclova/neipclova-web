import { Button } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

type ISurveyResultSeeallResultComponentProp = {};

export const SurveyResultSeeallResultComponent: FC<ISurveyResultSeeallResultComponentProp> = () => {
  return <HoverButtonSmall type="text">모든 결과 보기</HoverButtonSmall>;
};

const HoverButtonSmall = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid black;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  :hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }
`;
