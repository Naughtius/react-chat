import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { Chat } from "../pages/Chat";

const App = () => {
   return (
      <Switch>
         <Route path="/" exact component={AuthPage} />
         <Route path="/chat" component={Chat} />
         <Route render={() => <h1>404 NOT FOUND</h1>} />
      </Switch>
   );
};

export default App;
