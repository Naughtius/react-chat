const initialState = {
   form: {
      name: "",
      username: "",
      password: "",
   },
};

export default function loginReducer(state = initialState, action) {
   switch (action.type) {
      default:
         return state;
   }
}
