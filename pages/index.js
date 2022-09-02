import React, { useState, useEffect } from 'react';
import { Modal, useModal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

// import { SetuserFb } from '../function/ConfigUserFb';
import FacebookAuth from 'react-facebook-auth';
// import Swal from 'sweetalert2/src/sweetalert2.js'

export default function Home() {

  const MyFacebookButton = ({ onClick }) => (
    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", width: "100%" }}>
      <Button onPress={onClick}>
        Login with facebook
      </Button>
    </div>
  );

  const authenticate = async (response) => {
    console.log("authenticate", response);
    console.log('Good to see you, ' + response.name + '.');
    if (response.accessToken) {
      const data = {
        "accessToken": response.accessToken,
        "userId": response.userID,
        "name": response.name,
        "email": response.email,
        "picture": response.picture.data.url
      }
      console.log(data)
      // const res = await SetuserFb(data);
      // console.log("res", res);
    }

    // const { data } = await SetuserFb(response);
    // console.log(data);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <Text h1 weight="bold">Bot Integracion Xfiv</Text>
      <div style={{ padding: "10px" }} />
      <FacebookAuth
        appId="3176667395950990"
        fields="email,pages_show_lis,pages_manage_metadata,pages_messeging,pages_read_engagement"
        callback={authenticate}
        component={MyFacebookButton}
      />
    </div>

  )
}
