import { AUTH_SUCCESS } from "../actions/actionTypes";

const initialState = {
   data: null,
};

export default function authReducer(state = initialState, action) {
   switch (action.type) {
      case AUTH_SUCCESS:
         return {
            ...state,
            data: action.data,
         };
      default:
         return state;
   }
}
