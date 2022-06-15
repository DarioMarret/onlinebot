import React, { useState, useEffect } from 'react';
import { Modal, useModal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

import { SetuserFb } from '../function/ConfigUserFb';
import FacebookAuth from 'react-facebook-auth';

export default function Home() {

  const MyFacebookButton = ({ onClick }) => (
    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", width: "100%" }}>
      <Button onPress={onClick}>
        Login with facebook
      </Button>
    </div>
  );

  const authenticate = (response) => {
    console.log("authenticate", response);
    // let token = response.authResponse.accessToken;
    // console.log('Good to see you, ' + response.name + '.');
    // const { data } = await SetuserFb({ ...response, token });
    // console.log(data);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <Text h1 weight="bold">Bot Integracion Xfiv</Text>
      <div style={{ padding: "10px" }} />
      <FacebookAuth
        appId="3176667395950990"
        callback={authenticate}
        component={MyFacebookButton}
      />
    </div>

  )
}
