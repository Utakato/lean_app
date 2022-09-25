import { Button } from "@mui/material";
import React from "react";

interface FormButtonsProps {
  primaryText: string;
  secondaryText: string;
  primaryHandler: () => void;
  secondaryHandler: () => void;
}

export const FormButtons: React.FC<FormButtonsProps> = ({
  primaryText,
  secondaryText,
  primaryHandler,
  secondaryHandler,
}) => {
  return (
    <div className="flex justify-between w-full">
      <Button variant="outlined" onClick={secondaryHandler}>
        {secondaryText}
      </Button>
      <Button variant="contained" onClick={primaryHandler}>
        {primaryText}
      </Button>
    </div>
  );
};
