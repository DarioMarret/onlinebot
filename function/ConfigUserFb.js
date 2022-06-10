import axios from "axios";

export const SetuserFb = async (data) => {
    var username = 'user1';
    var password = 'pass1';
    var credentials = btoa(username + ':' + password);
    var basicAuth = 'Basic ' + credentials;
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