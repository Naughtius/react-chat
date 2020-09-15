import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
   loaderWrap: {
      width: "100%",
      height: "100%",
      background: "#140F5D",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
   },
   loader: {
      color: "#fff",
   },
}));

const Loader = () => {
   const classes = useStyles();

   return (
      <div className={classes.loaderWrap}>
         <CircularProgress size={60} className={classes.loader} />
      </div>
   );
};

export default Loader;
