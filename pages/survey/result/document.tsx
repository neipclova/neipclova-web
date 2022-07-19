import Document, {Html, Head, Main, NextScript} from 'next/document'
import { GetServerSideProps } from 'next';
// import Head from 'next/head';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        defer
                        src = "https://developers.kakao.com/sdk/js/kakao.min.js"
                    ></script>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;