import axios from "axios";

export const SetuserFb = async (data) => {

  console.log("datos", data);
  var config = {
    method: 'post',
    // url: 'https://incoming.xfiv.chat/configuserfb/api/newConfigButton',
    url: 'https://6d01-45-187-2-162.ngrok.io/api/newConfigButton',
    headers: {
      'Authorization': 'Basic dXNlcjE6cGFzczE=',
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const { data } = await axios(config)
    return data;
  } catch (error) {
    return error
  }
}