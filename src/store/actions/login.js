import axios from "../../axios/axios-app";

export function fetchLogin() {
   return async (dispatch) => {
      try {
         const response = await axios.get("users.json");
         console.log(response);
      } catch (e) {
         console.log(e);
      }
   };
}
