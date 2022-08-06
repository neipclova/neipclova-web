import { Typography, Layout } from 'antd';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import logo from '../../../assets/images/neipclova_logo_small.png';

type ISurveyHomeLayoutProps = {
  children: ReactNode;
};

export const SurveyHomeLayout: FC<ISurveyHomeLayoutProps> = ({ children }) => {
  return (
    <Layout className="global-fnt">
      <LayoutHeader>
        <Typography.Title level={3}>네잎클로바&nbsp;</Typography.Title>
        <Image src={logo} width="20px" height="20px" objectFit="contain"></Image>
      </LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
};

const LayoutHeader = styled(Layout.Header)`
  display: flex;
  height: 100%;
  justify-content: center;
  background: ${({ theme }) => theme.colors.sky};
`;

const LayoutContent = styled(Layout.Content)`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.base};
  height: 100vh;
  background: ${({ theme }) => `linear-gradient(${theme.colors.sky}, 50%, ${theme.colors.red})`};
`;
