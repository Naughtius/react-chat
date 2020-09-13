import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "500px",
      position: "absolute",
      left: "calc(50% - 250px)",
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

export default function SignUp() {
   const classes = useStyles();

   return (
      <div className={classes.paper}>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
            Зарегестрироваться
         </Typography>
         <form className={classes.form} noValidate>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                  <TextField
                     autoComplete="name"
                     name="name"
                     variant="outlined"
                     required
                     fullWidth
                     id="name"
                     label="Name"
                     autoFocus
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     variant="outlined"
                     required
                     fullWidth
                     id="username"
                     label="Username"
                     name="username"
                     autoComplete="username"
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     variant="outlined"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
               </Grid>
            </Grid>
            <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
            >
               Зарегестрироваться
            </Button>
         </form>
      </div>
   );
}