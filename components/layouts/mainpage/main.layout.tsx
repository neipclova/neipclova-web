import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

type IMainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Header style={{ padding: 0, height: 'auto' }}></Layout.Header>
      <Layout.Content style={{ paddingTop: 20 }}>{children}</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};