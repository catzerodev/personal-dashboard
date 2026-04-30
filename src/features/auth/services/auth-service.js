import axios from "axios";
const API_URL = "https://fakestoreapi.com/auth/login"

//if response status is 200, the endpoint is going to return this object :{token} //


export const loginService = async ({ username, password }) => {
  const response = await axios.post(API_URL, {
    username,
    password,
  });

  return response.data.token;
};