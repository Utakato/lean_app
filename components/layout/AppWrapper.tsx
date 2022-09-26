import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";

interface AppWrapperProps {
  children: ReactJSXElement;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-white overflow-y-scroll flex flex-col justify-center items-center px-8">
      {children}
    </div>
  );
};
