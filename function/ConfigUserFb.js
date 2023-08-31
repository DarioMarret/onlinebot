import axios from "axios";

export const SetuserFb = async (data) => {
  try {
    const res = await axios.post('https://core.xfiv.chat/fbmessager/api/v1/newConfigButton', { data }, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Basic dXNlcjE6cGFzczE='
      }
    })
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log("error")
    return error
  }
}