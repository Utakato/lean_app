import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

export const SignUpPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <Typography variant="h2" className={classes.heading}>
          Create an account
        </Typography>
        <form className={classes.form}>
          <TextField variant="outlined" label="Email" />
          <TextField variant="outlined" label="Password" />
          <TextField variant="outlined" label="Confirm password" />
          <Button variant="contained" className={classes.btn}>
            Signup
          </Button>
          <Button variant="outlined" className={classes.btn}>
            Cancel
          </Button>
        </form>
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
}));
