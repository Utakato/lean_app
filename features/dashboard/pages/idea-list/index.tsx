import { Button, Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { AppWrapper, Topbar } from "../../../../components";
import { addNewIdea } from "../../../../core/api/lean-canvas";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store";
import { routes } from "../../../../core/routes/routes";
import { logoutAction } from "../../../authentication";
import { IdeaCard } from "./components/IdeaCard";

export const IdeaList: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { uid, user } = useAppSelector((root) => root.authentication);
  const { ideas } = user;
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
        <Topbar onBack={handleClick} />
        <div className="">
          {ideas.length > 0 ? (
            ideas.map((idea) => {
              return (
                <IdeaCard
                  key={idea.id}
                  id={idea.id}
                  name={idea.name}
                  uvp={idea.leanCanvas?.uvp}
                />
              );
            })
          ) : (
            <Typography
              variant="body1"
              className="text-textSecondary text-center"
            >
              no idea yet
            </Typography>
          )}
          <Button onClick={handleAddIdea}> Add new idea</Button>
          <Button onClick={logout}> Logout</Button>
        </div>
      </>
    </AppWrapper>
  );
};
