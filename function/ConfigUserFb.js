import axios from "axios";

export const SetuserFb = async (data) => {
  try {
    const res = await axios.post('https://hip-glasses-film-45-187-2-162.loca.lt/api/newConfigButton', data, {headers: {'Authorization': 'Basic dXNlcjE6cGFzczE='}});
    return res.data;
  } catch (error) {
    console.log("error");
    return error
  }
}