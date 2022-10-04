import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface SmallCardProps {
  text: string;
  uncompleted?: boolean;
  onClick: () => void;
}

export const SmallCard: React.FC<SmallCardProps> = ({
  text,
  onClick,
  uncompleted,
}) => {
  return (
    <Button
      variant="contained"
      className={`rounded-lg w-full px-5 py-4 ${
        uncompleted ? "bg-textSecondary" : "bg-secondary"
      } justify-start`}
      onClick={onClick}
    >
      <Typography variant="h4" className="font-medium">
        {text}
      </Typography>
    </Button>
  );
};
