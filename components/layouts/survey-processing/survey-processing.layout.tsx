import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type ISurveyProcessingLayoutProps = {
  children: ReactNode;
  background: string;
};

export const SurveyProcessingLayout: FC<ISurveyProcessingLayoutProps> = ({
  children,
  background,
}) => {
  return (
    <Layout className="global-fnt">
      <LayoutHeader></LayoutHeader>
      <LayoutContent background={background}>{children}</LayoutContent>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};

const LayoutHeader = styled(Layout.Header)`
  padding: 0;
  height: auto;
`;

interface LayoutContentProps {
  background: string;
}

const LayoutContent = styled(Layout.Content)<LayoutContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.lg};
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.background};
`;
