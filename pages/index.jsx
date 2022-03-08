import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Link href="/survey">
        <a>
          <Button type="primary">설문 시작</Button>
        </a>
      </Link>
    </>
  );
};

export default Home;
