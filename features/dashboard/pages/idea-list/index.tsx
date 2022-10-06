import { Button, Card } from "@mui/material";
import React from "react";
import { AppWrapper, Topbar } from "../../../../components";

export const IdeaList: React.FC = () => {
  const handleClick = () => {
    console.log("hei");
  };
  return (
    <AppWrapper>
      <>
        <Topbar onBack={handleClick}></Topbar>
        <Card>First idea</Card>
        <Button> Add new idea</Button>
      </>
    </AppWrapper>
  );
};
