import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

type ISurveyProcessingLayoutProps = {
  children: ReactNode;
  setBackground: string;
};

export const SurveyProcessingLayout: FC<ISurveyProcessingLayoutProps> = ({
  children,
  setBackground,
}) => {
  return (
    <Layout className="global-fnt">
      <Layout.Header style={{ padding: 0, height: 'auto' }}></Layout.Header>
      <Layout.Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 30,
          height: '100vh',
          width: '100vw',
          alignItems: 'center',
          background: setBackground,
        }}
      >
        {children}
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};
