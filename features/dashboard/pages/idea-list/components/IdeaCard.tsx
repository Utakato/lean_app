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
}

export const IdeaCard: React.FC<IdeaCardProps> = ({
  name,
  uvp,
  id,
  initialValidationComplete,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(routes.ideaDashboard(id));
  };

  return (
    <Card className="flex flex-col items-start gap-2 p-4" onClick={handleClick}>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body2">{uvp}</Typography>
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
