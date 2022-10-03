import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface ProgressCardProps {
  total: number;
  current: number;
  children: ReactNode;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  total,
  current,
  children,
}) => {
  const value = (current / total) * 100;

  return (
    <Button
      className={
        "w-full p-3 pb-4 bg-textSecondary rounded-lg text-white justify-start items-start"
      }
    >
      <div className="absolute"> {/* this is color. */}</div>
      <div>{children}</div>
    </Button>
  );
};
