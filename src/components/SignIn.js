import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchLogin } from "../store/actions/login";

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
      width: "100%",
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

const SignIn = (props) => {
   const classes = useStyles();
   const [form, setForm] = useState({
      username: "",
      password: "",
   });

   const changeHandler = (e) => {
      console.log(e.target.name, e.target.value);
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
   };

   console.log(props);

   return (
      <div className={classes.paper}>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
            Войти в систему
         </Typography>
         <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="username"
               label="Username"
               name="username"
               autoComplete="username"
               autoFocus
               value={props.username}
               onChange={changeHandler}
            />
            <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
               value={props.password}
               onChange={changeHandler}
            />
            <FormControlLabel
               control={<Checkbox value="remember" color="primary" />}
               label="Remember me"
            />
            <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
               onClick={props.fetchLogin}
            >
               Войти
            </Button>
         </form>
      </div>
   );
};

function mapStateToprops(state) {
   return {
      username: state.username,
      password: state.password,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      fetchLogin: () => dispatch(fetchLogin()),
   };
}

export default connect(mapStateToprops, mapDispatchToProps)(SignIn);
