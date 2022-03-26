import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

type ISurveyProcessingLayoutProps = {
  children: ReactNode;
};

export const SurveyProcessingLayout: FC<ISurveyProcessingLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Header style={{ padding: 0, height: 'auto' }}></Layout.Header>
      <Layout.Content style={{ paddingTop: 10 }}>{children}</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};
