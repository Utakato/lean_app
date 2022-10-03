import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

interface TopbarProps {
  onBack: () => void;
  otherStyles?: string;
}

export const Topbar: React.FC<TopbarProps> = ({ onBack, otherStyles }) => {
  return (
    <div
      className={`w-full h-12 bg-secondary flex justify-between box-border px-8 items-center ${otherStyles}`}
    >
      <IconButton onClick={onBack}>
        <ArrowBackIcon />
      </IconButton>
      <div></div>
    </div>
  );
};
