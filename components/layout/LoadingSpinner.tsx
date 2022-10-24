import { CircularProgress } from "@mui/material";
import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <CircularProgress className="w-32 h-32" />
    </div>
  );
};
