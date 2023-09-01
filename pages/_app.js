
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
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v14.0&appId=549044906606678&autoLogAppEvents=1" nonce="PGyk9SsQ"></script>
            <script type='text/javascript'>
                var chatbox = document.getElementById('fb-customer-chat')
                chatbox.setAttribute("page_id", "104751728927194")
                chatbox.setAttribute("attribution", "biz_inbox")
                window.fbAsyncInit = function() { 
                FB.init({ xfbml : true, version : '17' })
                } 
                (function(d, s, id) { 
                var js, fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) return
                js = d.createElement(s)
                js.id = id
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
                fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'))
            </script>
        </div>
    );
}

export default MyApp;
