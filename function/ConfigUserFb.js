import axios from "axios";

export const SetuserFb = async (data) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dXNlcjE6cGFzczE=");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(data);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://6d01-45-187-2-162.ngrok.io/api/newConfigButton", requestOptions)
      .then(response => response.text())
      .then(result => console.log("resultado",result))
      .catch(error => console.log('error', error));
  } catch (error) {
    console.log("error", error);
    return error
  }
}