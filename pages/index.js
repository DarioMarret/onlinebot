import React, { useState, useEffect } from 'react';
import { Modal, useModal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

import { SetuserFb } from '../function/ConfigUserFb';
// import FacebookAuth from 'react-facebook-auth';
import FacebookLogin from 'react-facebook-login';

export default function Home() {

  const MyFacebookButton = (onClick) => (
    console.log("onclick", onClick),
    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", width: "100%" }}>
      <Button onPress={onClick}>
        Login with facebook
      </Button>
    </div>
  );

  const authenticate = async (response) => {
    console.log("authenticate", response);
    console.log('Good to see you, ' + response.name + '.');
    const { data } = await SetuserFb(response);
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <Text h1 weight="bold">Bot Integracion Xfiv</Text>
      <div style={{ padding: "10px" }} />
      {/* <FacebookAuth
        appId="3176667395950990"
        callback={authenticate}
        component={MyFacebookButton}
      /> */}
      <FacebookLogin
        appId="3176667395950990"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,pages_messaging,pages_user_gender,pages_show_list"
        version='14.0'
        textButton="Login con FB"
        icon="fa-facebook"
        onClick={MyFacebookButton}
        callback={authenticate} />,
    </div>

  )
}
