import { TextField, Typography } from "@mui/material";
import React from "react";

export enum inputType {
  SINGLE = "single",
  MULTILINE = "multiline",
}

interface LeanCanvasQuestionProps {
  description: string;
  type: inputType;
  register: any;
}

// export const LeanCanvasQuestion: React.FC<LeanCanvasQuestionProps> = ({
//   description,
//   type,
//   register,
// }) => {
//   return (

//   );
// };
