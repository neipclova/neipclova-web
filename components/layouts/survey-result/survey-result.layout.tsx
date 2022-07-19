import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

type ISurveyResultLayoutProps = {
  children: ReactNode;
};

export const SurveyResultLayout: FC<ISurveyResultLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Header style={{ padding: 0, height: 'auto' }}></Layout.Header>
      <Layout.Content style={{ paddingTop: 40 }}>{children}</Layout.Content>
    </Layout>
  );
};
