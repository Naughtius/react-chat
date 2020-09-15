import axios from "axios";
import { AUTH_SUCCESS } from "./actionTypes";

export function auth(name, username, password, isLogin) {
   return async (dispatch) => {
      try {
         let authData = {
            name,
            username,
            password,
            isLogin,
         };
         let axiosConfig = {
            headers: {
               "Content-Type": "application/json",
            },
         };
         let url = "/auth/register";
         if (isLogin) {
            url = "/auth/login";
         }

         const response = await axios.post(url, authData, axiosConfig);
         console.log(response);
         dispatch(authSuccess(response));
      } catch (e) {
         console.log(e);
      }
   };
}

export function authSuccess(data) {
   return {
      type: AUTH_SUCCESS,
      data,
   };
}
