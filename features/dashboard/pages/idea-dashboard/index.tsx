import React from "react";
import { AppWrapper, Topbar } from "../../../../components";
import { useAppSelector } from "../../../../core/redux/store";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { BoxButton, ProgressCard } from "./components";
import { routes } from "../../../../core/routes/routes";

export const IdeaDashboardPage: React.FC = () => {
  const router = useRouter();
  const { uid } = useAppSelector((root) => root.authentication);

  const handleLeanCanvasClick = () => {
    const { ideaId } = router.query;
    router.push(routes.leanCanvas(ideaId as string));
  };
  return (
    <>
      <Topbar onBack={() => console.log("tba")} />
      <AppWrapper>
        <div className="flex flex-col justify-start items-start w-full h-full gap-8">
          <Typography variant="h2" className="text-black font-medium">
            {"idea name"}
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
