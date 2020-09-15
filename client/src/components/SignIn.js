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
import { auth } from "../store/actions/auth";

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
      formControls: {
         username: {
            value: "",
            type: "username",
            label: "Username",
            errorMessage: "Введите что нибудь!",
         },
         password: {
            value: "",
            type: "password",
            label: "Password",
            errorMessage: "Введите корректный пароль",
         },
      },
   });

   const authHanler = (e) => {
      e.preventDefault();
      props.auth(
			null,
         form.formControls.username.value,
			form.formControls.password.value,
			true
		);
   };

   const changeHandler = async (e, item) => {
      const formControls = { ...form.formControls };
      const inputItem = formControls[item];
      inputItem.value = e.target.value;
		setForm({ formControls });
   };

   const renderInputs = () => {
      return Object.keys(form.formControls).map((item, index) => {
         const { label, value, type } = form.formControls[item];

         return (
            <TextField
               key={index}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id={type}
               label={label}
               name={type}
               autoFocus
               value={value}
               onChange={(e) => changeHandler(e, item)}
            />
         );
      });
   };

   return (
      <div className={classes.paper}>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
            Войти в систему
         </Typography>
         <form className={classes.form} noValidate onSubmit={authHanler}>
            {renderInputs()}

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
               onClick={authHanler}
            >
               Войти
            </Button>
         </form>
      </div>
   );
};

function mapDispatchToProps(dispatch) {
   return {
      auth: (name, username, password, isLogin) =>
         dispatch(auth(name, username, password, isLogin)),
   };
}

export default connect(null, mapDispatchToProps)(SignIn);
