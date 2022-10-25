import { Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { ProgressBar } from "../../../../../components";
import { routes } from "../../../../../core/routes/routes";

interface IdeaCardProps {
  name: string;
  uvp: string;
  initialValidationComplete?: number;
  id: string;
  leanCanvas?: any;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({
  name,
  uvp,
  id,
  initialValidationComplete,
  leanCanvas,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(routes.ideaDashboard(id));
  };

  let leanCanvasCompletedQuestions = 0;
  if (leanCanvas) {
    leanCanvasCompletedQuestions = Object.keys(leanCanvas).length;
  }

  return (
    <Card
      className="flex flex-col items-start gap-2 p-4 bg-white"
      onClick={handleClick}
    >
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body2">{uvp}</Typography>

      <Typography variant="body2">
        Lean Canvas: {leanCanvasCompletedQuestions} / 9
      </Typography>

      {initialValidationComplete && (
        <ProgressBar
          current={initialValidationComplete}
          total={10}
          prefixText={"Initial Validation:"}
        />
      )}
    </Card>
  );
};
