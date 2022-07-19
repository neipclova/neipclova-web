import { Button, Typography } from 'antd';
import { FC } from 'react';
import { ShareAltOutlined } from '@ant-design/icons';
import React, {useRef} from 'react';

import Image from 'next/image';
import KAKAO from './kakao.jpeg';



type ISurveyResultShareComponentProp = {};

export const SurveyResultShareComponent: FC<ISurveyResultShareComponentProp> = () => {
  const { Title } = Typography;
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <Button type="text" shape="round" size="large" color='white' icon={<ShareAltOutlined />}>
        내 결과 공유하기
      </Button>
        <div>
          <Image src={KAKAO} width={40} height={40} alt="kakao"></Image>
        </div>
    </div>
    </>
  );
};


// const url = encodeURI(window.location.href);

// // Facebook
// const shareFacebook = () => {
//   window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
// }


// // Twitter
// const shareTwitter = () => {
//   const text = '[꽉 막히는 출근길!] 나는 어떤 MBTI 유형일까요?'
//   window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" +  url)
// }

// 카카오톡은 pages/survey/result 에 만들어보려고 했음...