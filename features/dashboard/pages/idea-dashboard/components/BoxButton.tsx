import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface BoxButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export const BoxButton: React.FC<BoxButtonProps> = ({
  onClick,
  children,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      className="bg-secondary text-white w-full aspect-square rounded-lg"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
