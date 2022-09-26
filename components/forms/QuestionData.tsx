import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";

interface QuestionDataProps {
  children: ReactJSXElement;
  modalContent?: ReactJSXElement;
}

export const QuestionData: React.FC<QuestionDataProps> = ({
  children,
  modalContent,
}) => {
  return (
    <div>
      <div>
        <Typography variant="h3">title</Typography>
        {modalContent && (
          <IconButton>
            <InfoIcon />
          </IconButton>
        )}
      </div>
      <Typography variant="h6" className="text-textSecondary">
        descripiton
      </Typography>
      {children}
    </div>
  );
};
