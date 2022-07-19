import { ShareAltOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

// import KAKAO from './kakao.jpeg';

type ISurveyResultShareComponentProp = {};

export const SurveyResultShareComponent: FC<ISurveyResultShareComponentProp> = () => {
  return (
    <HoverButton type="text" icon={<ShareAltOutlined />}>
      카카오톡 공유하기
    </HoverButton>
    // <Image src={KAKAO} width={40} height={40} alt="kakao"></Image>
  );
};

const HoverButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid black;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-top: ${({ theme }) => theme.margins.sm};
  :hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }
`;

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
