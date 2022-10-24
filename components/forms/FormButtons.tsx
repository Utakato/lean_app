import { Button, Typography } from "@mui/material";
import React from "react";

interface FormButtonsProps {
  primaryText: string;
  secondaryText?: string;
  primaryHandler: (e: any) => void;
  secondaryHandler?: () => void;
  formId: string;
  disabledPrimary: boolean;
}

export const FormButtons: React.FC<FormButtonsProps> = ({
  primaryText,
  secondaryText,
  primaryHandler,
  secondaryHandler,
  disabledPrimary,
  formId,
}) => {
  return (
    <div className="flex justify-between w-full">
      {secondaryText && secondaryHandler ? (
        <Button
          variant="outlined"
          onClick={secondaryHandler}
          className="w-5/12 flex justify-center items-center"
        >
          <Typography variant="h4">{secondaryText}</Typography>
        </Button>
      ) : (
        <div></div>
      )}
      <Button
        variant="contained"
        type="submit"
        form={formId}
        className="w-5/12 flex justify-center items-center"
        disabled={disabledPrimary}
        onClick={primaryHandler}
      >
        <Typography variant="h4">{primaryText}</Typography>
      </Button>
    </div>
  );
};
