import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

export const LoginPage = () => {
  const { classes, cx } = useStyles();
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
            marginTop: "16px",
          }}
        >
          <Button
            variant="outlined"
            className={cx(classes.btn, classes.googleLogin)}
          >
            Continue with Google
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
  googleLogin: {
    color: theme.palette.text.secondary,
    borderColor: theme.palette.text.secondary,
  },
}));
