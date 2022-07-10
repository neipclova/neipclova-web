import { Result, Typography, Button } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { FC } from 'react';
import Image from 'next/image';
import INFJ from './images/INFJ.jpeg';

type ISurveyResultTitleComponentProp = {};
// 일단 Infj의 경우에만 넣어놓은 것.
export const SurveyResultTitleComponent: FC<ISurveyResultTitleComponentProp> = () => {
  const { Title } = Typography;
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        // background : '#deb887',
      }}>
        <div>
          <Image src={INFJ} width={600} height={1000} alt="INFJ"></Image>
        </div>
      </div>

    </>
  );
};
