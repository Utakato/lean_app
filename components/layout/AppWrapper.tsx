import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { useEffect, useState } from "react";

interface AppWrapperProps {
  children: ReactJSXElement;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    console.log(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        minHeight: windowHeight ? windowHeight : "100vh",
      }}
      className={`
       bg-white overflow-y-scroll flex flex-col justify-center items-center px-8 py-20`}
    >
      {children}
    </div>
  );
};
