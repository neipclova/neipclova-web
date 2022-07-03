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
    <Layout>
      <LayoutHeader>
        <Typography.Title level={5}>네잎클로바&nbsp;</Typography.Title>
        <Image src={logo} width="20px" height="20px" objectFit="contain"></Image>
      </LayoutHeader>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};

const LayoutHeader = styled(Layout.Header)`
  display: flex;
  height: 100%;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  background: ${({ theme }) => theme.colors.sky};
`;
