import { LinkOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import PathEnum from 'utils/paths';

type ISurveyHomeDetailModuleProps = {};

export const SurveyHomeDetailModule: FC<ISurveyHomeDetailModuleProps> = () => {
  return (
    <StyledSpace direction="vertical" align="center">
      <Link href={PathEnum.SURVEY}>
        <a>
          <HoverButton type="text">지금 바로 시작하기</HoverButton>
        </a>
      </Link>
      <HoverButtonSmall type="text" icon={<LinkOutlined />}>
        URL 복사하기
      </HoverButtonSmall>
    </StyledSpace>
  );
};

const StyledSpace = styled(Space)`
  display: flex;
  padding: ${({ theme }) => theme.paddings.base};
`;

const HoverButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background: rgba(0, 0, 0, 0.6);
  font-size: ${({ theme }) => theme.fonts.size.lg};
  height: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  :hover {
    background-color: white;
  }
`;

const HoverButtonSmall = styled(Button)`
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.white};
  background: none;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  :hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }
`;
