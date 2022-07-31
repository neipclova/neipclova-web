import { LinkOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import styled from 'styled-components';

import PathEnum from 'utils/paths';

type ISurveyHomeDetailModuleProps = {};

export const SurveyHomeDetailModule: FC<ISurveyHomeDetailModuleProps> = () => {
  useEffect(() => {
    window.Kakao.init('ec9b340b594d7112800fce80b767c1cf');
  }, []);

  // const onClick = () => {
  //   const { Kakao, location } = window;
  //   Kakao.Link.sendScrap({
  //     requestUrl: location.href,
  //   });
  // };

  const shareMessage = () => {
    const { Kakao } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MBTI',
        description: '#네잎클로바 #MBTI',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };

  return (
    <StyledSpace direction="vertical" align="center">
      <Link href={PathEnum.SURVEY}>
        <a>
          <HoverButton type="text">지금 바로 시작하기</HoverButton>
        </a>
      </Link>
      <HoverButtonSmall type="text" icon={<LinkOutlined />} onClick={shareMessage}>
        URL 복사하기
      </HoverButtonSmall>
    </StyledSpace>
  );
};

const StyledSpace = styled(Space)`
  display: flex;
  padding: ${({ theme }) => theme.paddings.base};
`;

const HoverButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background: rgba(0, 0, 0, 0.6);
  font-size: ${({ theme }) => theme.fonts.size.lg};
  height: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  :hover {
    background-color: white;
  }
`;

const HoverButtonSmall = styled(Button)`
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.white};
  background: none;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  :hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }
`;
