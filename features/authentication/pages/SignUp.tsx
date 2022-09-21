import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { routes } from "../../../core/routes/routes";

export const SignUpPage = () => {
  const { classes } = useStyles();
  const router = useRouter();

  const handleRedirect = () => {
    router.push(routes.login);
  };
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
            Create account
          </Button>
          <Button
            variant="text"
            className={classes.btn}
            onClick={handleRedirect}
          >
            <Typography className={classes.textBtn}>
              I already have an account
            </Typography>
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
    gap: theme.spacing(3),
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
  textBtn: {
    textTransform: "none",
  },
}));
