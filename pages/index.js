import React, { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {


  const ventanaSecundaria = (URL) => {
    window.open(URL, "ventana1", "width=120,height=300,scrollbars=NO")
  }
  useEffect(() => {
    (() => {
      FB.init({
        appId: '3176667395950990',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v14.0'
      });
      FB.AppEvents.logPageView();
    })

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));


    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        console.log(response)
        // statusChangeCallback(response);
      } else {
        console.log("no hay sesion de facebook")
      }
    });

  }, []);

  /**
   * https://developers.facebook.com/dialog/oauth?client_id:3176667395950990&scope=publishactions&response_type=token&redirect_uri=https://2180-45-187-2-162.ngrok.io/connect/inst-login
   * https://developers.facebook.com/dialog/oauth?
   * client_id: 3176667395950990
   * &scope=publishactions
   * &response_type=token
   * &redirect_uri=https://2180-45-187-2-162.ngrok.io/connect/inst-login
   */
  return (
    <div className="container">
      <Head>
        <title>IntelnexoBot</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="facebook-domain-verification" content="re53pssz1yix7gw93hqijubcmgdwvi" />
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v14.0&appId=3176667395950990&autoLogAppEvents=1" nonce="PGyk9SsQ"></script>
      </Head>

          //&auth_type=reauthorize&cbt=1653931581324&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df18a2b5732afeec%26domain%3Dstudio.csml.dev%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fstudio.csml.dev%252Ff35b8b4e5fcc474%26relation%3Dopener&client_id=177899270321819&display=popup&domain=studio.csml.dev&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fstudio.csml.dev%2Fbots%2F53b3f0e4-c4db-4852-954b-154df69a356c%2Fchannels%2Fnew%2Fmessenger&locale=en_US&logger_id=f135c110442c668&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3c82f47c578fa8%26domain%3Dstudio.csml.dev%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fstudio.csml.dev%252Ff35b8b4e5fcc474%26relation%3Dopener%26frame%3Df885976e2cf&response_type=token%2Csigned_request%2Cgraph_domain&scope=pages_messaging%2Cpages_manage_metadata%2Cpages_read_engagement&sdk=joey&version=v11.0
      <main>
        <h1 className="title">
          Prueba de Bot integracion Csml
        </h1>
        <button onClick={() => ventanaSecundaria("https://developers.facebook.com/dialog/oauth?client_id:3176667395950990&scope=publishactions&response_type=token&redirect_uri=https://2180-45-187-2-162.ngrok.io/connect/inst-login")}>
          Permiso
        </button>
        <div id="fb-root">
          <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
        </div>
      </main>



      <div id="status">
      </div>

      <footer>
        <a
          href="https://intelnexo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          IntelnexoBot{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
