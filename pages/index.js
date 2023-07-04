import React, { useState, useEffect } from "react";
import {
  Modal,
  useModal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
} from "@nextui-org/react";

// import { SetuserFb } from '../function/ConfigUserFb';
import FacebookLogin from "@greatsumini/react-facebook-login";


export default function Home() {
  const MyFacebookButton = ({ onClick }) => (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width: "100%",
      }}
    >
      <Button onPress={onClick}>Login with facebook</Button>
    </div>
  );

  const authenticate = async (response) => {
    console.log("authenticate", response);
    console.log("Good to see you, " + response.name + ".");
    if (response.accessToken) {
      const data = {
        accessToken: response.accessToken,
        userId: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      };
      console.log(data);
      // const res = await SetuserFb(data);
      // console.log("res", res);
    }
    // const { data } = await SetuserFb(response);
    // console.log(data);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = () => console.log("clicked");

  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <Text h1 weight="bold">
        Bot Integracion Xfiv
      </Text>
      <div style={{ padding: "10px" }} />
      <FacebookLogin
        appId="3176667395950990"
        // autoLoad={true}
        fields="email,name,picture"
        scope="email,public_profile,pages_show_list,pages_manage_metadata,pages_read_engagement,pages_messaging"
        onClick={componentClicked}
        callback={responseFacebook}
        style={{
          backgroundColor: "#4267b2",
          color: "#fff",
          fontSize: "16px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
