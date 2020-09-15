import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useRoutes } from "../routes";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/auth.hook";
import { SnackbarProvider } from "notistack";

const App = () => {
   const [loading, setLoading] = useState(true);
   const { login, logout, token, userId } = useAuth();
   const isAuth = !!token;
   const routes = useRoutes(isAuth);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 1000);
   }, []);

   if (loading) {
      return <Loader />;
   }

   return (
      <AuthContext.Provider
         value={{
            login,
            logout,
            token,
            userId,
            isAuth,
         }}
      >
         <BrowserRouter>
            <SnackbarProvider maxSnack={3}>{routes}</SnackbarProvider>
         </BrowserRouter>
      </AuthContext.Provider>
   );
};

export default App;
