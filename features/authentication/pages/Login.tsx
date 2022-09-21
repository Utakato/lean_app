import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { routes } from "../../../core/routes/routes";

export const LoginPage = () => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const handleRedirect = () => {
    router.push(routes.register);
  };
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <Typography variant="h2" className={classes.heading}>
          Login
        </Typography>
        <form className={classes.form}>
          <TextField variant="outlined" label="Email" />
          <TextField variant="outlined" label="Password" />
          <Button variant="contained" className={classes.btn}>
            Login
          </Button>
          <Button
            variant="text"
            className={classes.btn}
            onClick={handleRedirect}
          >
            <Typography className={classes.textBtn}>
              I want to create an account
            </Typography>
          </Button>
        </form>
        <Divider>
          <Typography className={classes.secondaryText}>OR</Typography>
        </Divider>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <Button
            variant="outlined"
            className={cx(classes.btn, classes.googleLogin)}
          >
            Continue with Google
          </Button>
          <Button
            variant="outlined"
            className={cx(classes.btn, classes.facebookLogin)}
          >
            Continue with Facebook
          </Button>
        </div>
      </Card>
    </div>
  );
};

const useStyles = makeStyles()((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    weigth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingInline: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  card: {
    width: "100%",
    padding: theme.spacing(4),
  },
  btn: {
    height: "56px",
    fontSize: "16px",
  },
  label: {
    marginLeft: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  secondaryText: {
    color: theme.palette.text.secondary,
  },
  textBtn: {
    textTransform: "none",
  },
  googleLogin: {
    color: theme.palette.text.secondary,
    borderColor: theme.palette.text.secondary,
  },
  facebookLogin: {
    backgroundColor: "lightBlue",
    color: "#fff",
  },
}));
