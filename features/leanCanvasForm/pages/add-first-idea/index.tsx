import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { AppWrapper } from "../../../../components";
import { addNewIdea } from "../../../../core/api/lean-canvas";
import { useAppSelector } from "../../../../core/redux/store";
import { useRouter } from "next/router";
import { routes } from "../../../../core/routes/routes";

export const AddFirstIdeaPage: React.FC = () => {
  const router = useRouter();
  const { uid } = useAppSelector((root) => root.authentication);

  const handleAddIdea = async () => {
    const ideaId = await addNewIdea(uid);
    router.push(routes.addIdeaWithID(ideaId));
  };

  const handleSkip = () => {
    console.log(
      "go to ideadashboard? deos it make sense to have a skip button?"
    );
  };

  return (
    <AppWrapper>
      <div className="w-full h-full flex flex-col justify-start items-center gap-10 mt-32">
        <Avatar className="w-52 h-52 bg-[#C3DCED2E] shadow-basic">
          <LightbulbIcon className="w-8/12 h-4/6 text-[#FFF48F]" />
        </Avatar>
        <Typography variant="h2" className="text-center text-black">
          Here you can add a new idea
        </Typography>
        <div className="flex flex-col gap-5">
          <Button
            variant="contained"
            onClick={handleAddIdea}
            className="w-48 font-semibold normal-case"
          >
            Add new idea
          </Button>
          <Button
            variant="text"
            onClick={handleSkip}
            className="w-48 normal-case text-textSecondary font-normal py-0"
          >
            Skip for now
          </Button>
        </div>
      </div>
    </AppWrapper>
  );
};
