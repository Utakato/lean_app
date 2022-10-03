import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React, { useState } from "react";
import { InfoModal } from "./InfoModal";

interface QuestionDataProps {
  children: ReactJSXElement;
  modalContent?: ReactJSXElement;
  title: string;
}

export const QuestionData: React.FC<QuestionDataProps> = ({
  children,
  modalContent,
  title,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => setOpenModal(false);
  const handleModalOpen = () => setOpenModal(true);

  return (
    <div className="flex flex-col  gap-8">
      <div className="flex justify-between items-center w-full">
        <Typography variant="h3" className="text-black">
          {title}
        </Typography>
        {modalContent ? (
          <IconButton onClick={handleModalOpen} className="p-4">
            <InfoIcon className="text-primary" fontSize="large" />
          </IconButton>
        ) : (
          <div></div>
        )}
      </div>

      {children}

      {modalContent && (
        <InfoModal open={openModal} onClose={handleModalClose}>
          {modalContent}
        </InfoModal>
      )}
    </div>
  );
};
