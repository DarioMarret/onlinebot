import {
  Text
} from "@nextui-org/react";
import React from "react";

import FacebookLogin from "@greatsumini/react-facebook-login";
import { SetuserFb } from "../function/ConfigUserFb";


export default function Home() {

  // useEffect(() => {

  // }, []);


  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <Text h1 weight="bold">
        Bot Integracion Xfiv
      </Text>
      <div style={{ padding: "10px" }} />
      <FacebookLogin
        // appId="3176667395950990"
        appId="549044906606678"
        // autoLoad={true}
        fields="email,name,picture"
        // scope="email,public_profile,pages_show_list,pages_manage_metadata,pages_read_engagement,pages_messaging"
        scope="email,public_profile,pages_show_list,pages_messaging"
        onSuccess={(response) => {
          console.log('Login Success!', response);
          SetuserFb(response),then((res) => {
            console.log(res);
          }).catch((err) => {
            console.log(err);
          });
        }}
        onFail={(error) => {
          console.log('Login Failed!', error);
        }}
        onProfileSuccess={(response) => {
          console.log('Get Profile Success!', response);
        }}
        style={{
          backgroundColor: "#4267b2",
          color: "#fff",
          fontSize: "16px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      />
      <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat"></div>
    </div>
  )
}
