import { Button, Card } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { AppWrapper, Topbar } from "../../../../components";
import { addNewIdea } from "../../../../core/api/lean-canvas";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store";
import { routes } from "../../../../core/routes/routes";
import { logoutAction } from "../../../authentication";

export const IdeaList: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { uid } = useAppSelector((root) => root.authentication);

  const handleClick = () => {
    console.log("hei");
  };

  const handleAddIdea = async () => {
    const ideaId = await addNewIdea(uid);
    router.push(routes.addIdeaWithID(ideaId));
  };

  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <AppWrapper>
      <>
        <Topbar onBack={handleClick}></Topbar>
        <Card>First idea</Card>
        <Button onClick={handleAddIdea}> Add new idea</Button>
        <Button onClick={logout}> Logout</Button>
      </>
    </AppWrapper>
  );
};
