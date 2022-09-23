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
  }

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }
  function checkLoginState() {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    })
  }
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '3176667395950990',
        cookie: true,
        xfbml: true,
        version: 'v14.0'
      });
    }
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "10%" }}>
      <Text h1 weight="bold">Bot Integracion Xfiv</Text>
      <div style={{ padding: "10px" }} />
      {/* <FacebookAuth
        appId="3176667395950990"
        scope={['email', 'user_friends', 'public_profile', 'pages_show_list','pages_manage_metadata', 'pages_read_engagement', 'pages_messaging']}
        fields="email,name,picture"
        callback={authenticate}
        component={MyFacebookButton}
      /> */}

      <button
        scope={['email', 'user_friends', 'public_profile', 'pages_show_list', 'pages_manage_metadata', 'pages_read_engagement', 'pages_messaging']}
        onClick={checkLoginState}>
        Login with facebook
      </button>

      <div id="status">
      </div>
    </div>
  )
}
