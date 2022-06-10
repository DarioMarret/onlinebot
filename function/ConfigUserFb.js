import axios from "axios";

export const SetuserFb = async (data) => {

    var config = {
        method: 'post',
        url: 'https://incoming.xfiv.chat/configuserfb/api/newConfigButton',
        headers: { 
          'Authorization': 'Basic dXNlcjE6cGFzczE=', 
          'Content-Type': 'application/json'
        },
        data : data
      };

    try {
        const { data } = await axios(config)
        return data;
    } catch (error) {
        return error
    }
}