import axios from "axios";

export const SetuserFb = async (data) => {

    var basicAuth = 'Basic dXNlcjE6cGFzczE=';
    console.log(basicAuth);
    console.log("data", data);
    try {
        const { data } = await axios.post(`https://incoming.xfiv.chat/configuserfb/api/newConfigButton`, data, {
            headers: 
            { 'Authorization': + basicAuth }
        });
        return data;
    } catch (error) {
        return error        
    }
}