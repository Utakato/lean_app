import { Typography, Box, LinearProgress } from "@mui/material";
import React from "react";

interface ProgressBarProps {
  total: number;
  current: number;
  prefixText?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  current,
  prefixText,
}) => {
  const value = (current / total) * 100;
  const prefix = prefixText ? prefixText : "";
  const progressInfo = `${prefix}${current}/${total} Completed`;

  return (
    <div className="w-full ">
      <Typography variant="body2" className={"text-black leading-5"}>
        {progressInfo}
      </Typography>
      <Box className="w-full mt-2">
        <LinearProgress
          variant="determinate"
          value={value}
          className="rounded-sm bg-progressBackground"
        />
      </Box>
    </div>
  );
};
