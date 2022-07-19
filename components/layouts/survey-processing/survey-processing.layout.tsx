import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

type ISurveyProcessingLayoutProps = {
  children: ReactNode;
};
const animation = keyframes`
0% {
  background-position: 0% 0%;
}
50% {
  background-position: 0% 100%;
}
100% {
  background-position: 0% 0%;
}
`;

export const SurveyProcessingLayout: FC<ISurveyProcessingLayoutProps> = ({ children }) => {
  return (
    <Layout className="global-fnt">
      <LayoutHeader></LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
};

const LayoutHeader = styled(Layout.Header)`
  padding: 0;
  height: auto;
`;

const LayoutContent = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.lg};
  height: 100vh;
  background: linear-gradient(#0d6efd, #2149a6, #1b1f69, #493080, #b96c87, #9f6cb9, #0d6efd);
  animation: ${animation} 60s linear infinite;
  background-size: 100% 1000%;
`;
