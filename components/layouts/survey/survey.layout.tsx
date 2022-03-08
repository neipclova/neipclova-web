import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

type ISurveyLayoutProps = {
  children: ReactNode;
};

export const SurveyLayout: FC<ISurveyLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Header style={{ padding: 0, height: 'auto' }}></Layout.Header>
      <Layout.Content style={{ paddingTop: 40 }}>{children}</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};
