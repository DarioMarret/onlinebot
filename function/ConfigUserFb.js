import axios from "axios";

export const SetuserFb = async (data) => {
  try {
    const res = await axios.post('https://6d01-45-187-2-162.ngrok.io/api/newConfigButton', data, {headers: {'Authorization': 'Basic dXNlcjE6cGFzczE='}});
    return res.data;
  } catch (error) {
    console.log("error", error);
    return error
  }
}