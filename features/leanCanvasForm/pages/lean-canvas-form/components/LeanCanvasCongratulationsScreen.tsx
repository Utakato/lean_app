import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useRouter } from "next/router";
import { routes } from "../../../../../core/routes/routes";

export const LeanCanvasCongratulationsScreen: React.FC = () => {
  const router = useRouter();

  const handleDashboardRedirect = () => {
    const { ideaId } = router.query;
    router.push(routes.ideaDashboard(ideaId as string));
  };
  const handleEditLeanCanvas = () => {
    console.log("tba");
  };
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-10 mt-32">
      <Avatar className="w-52 h-52 bg-[#C3DCED2E] shadow-basic">
        <LightbulbIcon className="w-8/12 h-4/6 text-[#FFF48F]" />
      </Avatar>
      <div className="flex flex-col justify-start items-center gap-4">
        <Typography variant="h2" className="text-center text-black">
          Congratulations!
        </Typography>
        <Typography variant="body1" className="text-center text-textSecondary">
          {
            "You can go now to your idea's dashboard or you can edit the answers to the previous questions in lean canvas"
          }
        </Typography>
      </div>
      <div className="flex flex-col gap-5">
        <Button
          variant="contained"
          onClick={handleDashboardRedirect}
          className="w-48 font-semibold normal-case"
        >
          Go to dashboard
        </Button>
        <Button
          variant="text"
          onClick={handleEditLeanCanvas}
          className="w-48 normal-case text-textSecondary font-normal py-0"
        >
          Edit Lean Canvas
        </Button>
      </div>
    </div>
  );
};
