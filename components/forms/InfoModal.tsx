import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Modal } from "@mui/material";
import React from "react";
import { Topbar } from "../layout";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactJSXElement;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Modal open={open}>
      {/* Container that centers the content */}
      <div className="flex flex-col justify-center items-center w-full h-full bg-white ">
        <Topbar onBack={onClose} otherStyles={"self-start"} />
        {children}
      </div>
    </Modal>
  );
};
