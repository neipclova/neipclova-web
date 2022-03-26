import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

type ISurveyHomeLayoutProps = {
  children: ReactNode;
};

export const SurveyHomeLayout: FC<ISurveyHomeLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Header style={{ padding: 0, height: 'auto' }}></Layout.Header>
      <Layout.Content style={{ paddingTop: 20 }}>{children}</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};
