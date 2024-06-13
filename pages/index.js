import {
  Text
} from "@nextui-org/react";
import React from "react";

import FacebookLogin from "@greatsumini/react-facebook-login";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { SetuserFb } from "../function/ConfigUserFb";


export default function Home() {

  // useEffect(() => {

  // }, []);


  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <Text h1 weight="bold">
        Bot Integracion BMCodigoMarret
      </Text>
      <div style={{ padding: "10px" }} />
      <FacebookLogin
        appId="3176667395950990"
        fields="email,name,picture,accounts"
        scope="pages_show_list,public_profile,pages_messaging,pages_read_engagement,pages_manage_metadata,business_management"
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
          padding: "5px 5px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%",
          marginTop: "15px",
        }}
      />
      
      <MessengerCustomerChat
        pageId="104203554913829"
        appId="3176667395950990"
      />
    </div>
  )
}
