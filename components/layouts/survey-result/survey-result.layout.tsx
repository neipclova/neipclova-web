import { Layout, Typography } from 'antd';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import logo from '../../../assets/images/neipclova_logo_small.png';

type ISurveyResultLayoutProps = {
  children: ReactNode;
};

export const SurveyResultLayout: FC<ISurveyResultLayoutProps> = ({ children }) => {
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
  background: ${({ theme }) => theme.colors.white};
`;

const LayoutContent = styled(Layout.Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(#170443, #020210, #1C063C);
`;
// background: #ad997a;
// background: linear-gradient(#0d6efd, #2149a6, #1b1f69, #493080, #b96c87, #9f6cb9, #0d6efd);