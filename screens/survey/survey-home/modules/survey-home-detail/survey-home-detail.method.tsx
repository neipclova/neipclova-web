import { useUserAgent } from 'next-useragent'


export const getUserAgent = async () => {
  let ua;
  ua = useUserAgent(window.navigator.userAgent)
  console.log(ua);

  return ua;

  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36
  //   ip_address: "127.0.0.0",
  //   agent_os: "window",
  //   agent_browser: "chrome",
  //   access_url: "https://test",
};