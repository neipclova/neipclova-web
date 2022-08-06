import { useUserAgent } from 'next-useragent';

export const getUserAgent = async () => {
  const ua = useUserAgent(window.navigator.userAgent);
  return ua;
};
