import React, { useEffect, useMemo } from "react";
import { AppWrapper, Topbar } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { BoxButton, ProgressCard } from "./components";
import { routes } from "../../../../core/routes/routes";
import { getUserIdeasAction, Idea } from "../../../authentication";

export const IdeaDashboardPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { uid, user } = useAppSelector((root) => root.authentication);
  const { ideaId } = router.query;

  const activeIdea = useMemo(
    () => user.ideas.filter((idea) => idea.id === ideaId)[0],
    [user.ideas, ideaId]
  ) as Idea;

  useEffect(() => {
    dispatch(getUserIdeasAction(uid));
  }, []);

  const handleLeanCanvasClick = () => {
    router.push(routes.leanCanvas(ideaId as string));
  };
  return (
    <>
      <Topbar onBack={() => console.log("tba")} />
      <AppWrapper>
        <div className="flex flex-col justify-start items-start w-full h-full gap-8">
          <Typography variant="h2" className="text-black font-medium">
            {activeIdea.name}
          </Typography>
          <div className="flex w-full gap-4">
            <BoxButton onClick={handleLeanCanvasClick}>
              <Typography variant="h3" className="font-medium">
                Lean Canvas
              </Typography>
            </BoxButton>
            <BoxButton disabled onClick={() => console.log("tba")}>
              <Typography variant="h3" className="font-medium">
                Notes
              </Typography>
            </BoxButton>
          </div>
          <Typography variant="h2" className="text-black font-medium">
            {"Validation"}
          </Typography>
          <ProgressCard total={6} current={1}>
            <div>
              <Typography variant="h4">Initial Validation: 0/6</Typography>
              <Typography variant="body2" className="text-left">
                {" "}
                little text
              </Typography>
            </div>
          </ProgressCard>
        </div>
      </AppWrapper>
    </>
  );
};