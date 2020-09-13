import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { Chat } from "../pages/Chat";
import Loader from "./Loader";

const App = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 1000);
   }, []);

   if (loading) {
      return <Loader />;
   }

   return (
      <Switch>
         <Route path="/" exact component={AuthPage} />
         <Route path="/chat" component={Chat} />
         <Route render={() => <h1>404 NOT FOUND</h1>} />
      </Switch>
   );
};

export default App;
