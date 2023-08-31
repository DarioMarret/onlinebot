import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/dist/shared/lib/head';
"next/head";

function MyApp({ Component, pageProps }) {
    
    return (
        <div className="container">
            <Head>
                <title>Xfiv</title>
                <link rel="icon" href="/favicon.ico" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <meta name="facebook-domain-verification" content="re53pssz1yix7gw93hqijubcmgdwvi" />
            </Head>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
            
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
            {/* <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v14.0&appId=549044906606678&autoLogAppEvents=1" nonce="PGyk9SsQ"></script> */}
        </div>
    );
}

export default MyApp;
