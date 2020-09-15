import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "../store/actions/auth";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

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

const SignUp = (props) => {
	const classes = useStyles();
	const { enqueueSnackbar } = useSnackbar();
   const [form, setForm] = useState({
      formControls: {
         name: {
            value: "",
            type: "Name",
            label: "Name",
            errorMessage: "Введите что нибудь!",
         },
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

   const authHandler = (e) => {
      e.preventDefault();
      props.auth(
         form.formControls.name.value,
         form.formControls.username.value,
         form.formControls.password.value,
         false
		);
		console.log(props);
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
			const grid = index === 2 ? 12 : 6;

         return (
            <Grid item xs={12} sm={grid} key={index}>
               <TextField
                  key={index}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id={type}
                  label={label}
						name={type}
						type={type}
                  autoFocus
                  value={value}
                  onChange={(e) => changeHandler(e, item)}
               />
            </Grid>
         );
      });
   };

   return (
      <div className={classes.paper}>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
            Регистрация
         </Typography>
         <form className={classes.form} noValidate onSubmit={authHandler}>
            <Grid container spacing={2}>
               {renderInputs()}
            </Grid>
            <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
               onClick={authHandler}
            >
               Зарегестрироваться
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

export default connect(null, mapDispatchToProps)(SignUp);
