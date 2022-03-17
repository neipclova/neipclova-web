import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

type IResultLayoutProps = {
  children: ReactNode;
};

export const ResultLayout: FC<IResultLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Header style={{ padding: 0, height: 'auto' }}></Layout.Header>
      <Layout.Content style={{ paddingTop: 40 }}>{children}</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};
