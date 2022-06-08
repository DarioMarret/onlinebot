import axios from "axios";

export const SetuserFb = async (data) => {
    var username = 'user1';
    var password = 'pass1';
    var credentials = btoa(username + ':' + password);
    var basicAuth = 'Basic ' + credentials;
    console.log(basicAuth);
    console.log("data", data);
    try {
        const { data } = await axios.post(`http://52.25.41.89:5055/api/newConfigButton`, data, {
            headers: 
            { 'Authorization': + basicAuth }
        });
        return data;
    } catch (error) {
        return error        
    }
}