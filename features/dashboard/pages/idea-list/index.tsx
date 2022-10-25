import { Button, Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { AppWrapper, Topbar } from "../../../../components";
import { LoadingSpinner } from "../../../../components/layout/LoadingSpinner";
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
    <Suspense fallback={<LoadingSpinner />}>
      <AppWrapper>
        <>
          <Topbar onBack={handleClick} />
          <div className="flex flex-col gap-5 px-5 py-5">
            <Typography variant="h2" className="text-black font-normal">
              Projects
            </Typography>
            {ideas.length > 0 ? (
              ideas.map((idea) => {
                return (
                  <IdeaCard
                    key={idea.id}
                    id={idea.id}
                    name={idea.name}
                    uvp={idea.leanCanvas?.uvp}
                    leanCanvas={idea.leanCanvas ? idea.leanCanvas : undefined}
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
            <Button variant="contained" onClick={handleAddIdea}>
              Add new idea
            </Button>
            <Button onClick={logout}> Logout</Button>
          </div>
        </>
      </AppWrapper>
    </Suspense>
  );
};
