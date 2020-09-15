import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { Chat } from "./pages/Chat";

export const useRoutes = (isAuth) => {
   if (isAuth) {
      return (
         <Switch>
            <Route path="/chat" exact>
               <Chat />
            </Route>
            <Redirect to="/chat" />
         </Switch>
      );
   }

   return (
      <Switch>
         <Route path="/" exact>
            <AuthPage />
         </Route>
         <Redirect to="/" />
      </Switch>
   );
};
