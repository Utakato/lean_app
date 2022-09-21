import { Card, TextField, Typography } from "@mui/material";
import React from "react";

export const SignUpPage = () => {
  return (
    <Card>
      <Typography variant="h1">Register</Typography>
      <form>
        <Typography variant="body2">Email</Typography>
        <TextField variant="outlined" />
      </form>
    </Card>
  );
};
