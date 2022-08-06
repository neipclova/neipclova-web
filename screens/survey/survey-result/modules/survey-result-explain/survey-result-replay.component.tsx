import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import { PathEnum } from 'utils/paths';

type ISurveyResultReplayComponentProp = {};

export const SurveyResultReplayComponent: FC<ISurveyResultReplayComponentProp> = () => {
  return (
    <Link href={{ pathname: PathEnum.HOME }}>
      <a>
        <HoverButton type="text" icon={<ReloadOutlined />}>
          테스트 다시하기
        </HoverButton>
      </a>
    </Link>
  );
};

const HoverButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid black;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-top: ${({ theme }) => theme.margins.sm};
  :hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }
`;
