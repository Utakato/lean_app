import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo, useEffect, useState } from "react";
import { Topbar, AppWrapper, SmallCard } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store";
import { routes } from "../../../../core/routes/routes";
import { Idea, getUserIdeasAction } from "../../../authentication";
import { LeanQuestionModal } from "./components/leanQuestionModal";

enum CanvasFieldsIndexes {
  problem = 1,
  customer = 2,
  solution = 3,
  uvp = 4,
  revenue = 5,
  channels = 6,
  keyMetrics = 7,
  costs = 8,
  unfairAdvantage = 9,
}

export const LeanCavnasPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [modalInfo, setModalInfo] = useState({ open: false, step: 0 });

  const { uid, user } = useAppSelector((root) => root.authentication);
  const { ideaId } = router.query;

  useEffect(() => {
    dispatch(getUserIdeasAction(uid));
  }, []);

  const activeIdea = useMemo(
    () => user.ideas.filter((idea) => idea.id === ideaId)[0],
    [user.ideas, ideaId]
  ) as Idea;

  console.log("activeIdea", activeIdea);
  const { name, id, leanCanvas } = activeIdea;

  const handleClick = (fieldName: string) => {
    console.log("fieldNAme", fieldName);
    // @ts-ignore
    const step = CanvasFieldsIndexes[fieldName];
    setModalInfo({ open: true, step: step });
  };

  const handleModalClose = () => {
    setModalInfo((prevState) => {
      return { ...prevState, open: false };
    });
  };

  const handleBack = () => {
    router.push(routes.ideaDashboard(ideaId as string));
  };

  return (
    <>
      <Topbar onBack={handleBack} />
      <AppWrapper>
        <div className="p-5">
          <Typography variant="h2" className="text-black font-medium">
            UVP
          </Typography>
          {leanCanvas?.uvp ? (
            <Button variant="text" onClick={() => handleClick("uvp")}>
              <Typography variant="body1" className="text-black ">
                {leanCanvas.uvp}
              </Typography>
            </Button>
          ) : (
            <Button variant="text" onClick={() => handleClick("uvp")}>
              You have not defined your UVP yet... Click here to add one
            </Button>
          )}

          <Typography variant="h2" className="text-black font-medium">
            Product
          </Typography>
          <div className="flex flex-col gap-5 mt-5 mb-8">
            <SmallCard text="Problem" onClick={() => handleClick("problem")} />
            <SmallCard
              text="Solution"
              onClick={() => handleClick("solution")}
            />
            <SmallCard
              text="Cost structure"
              onClick={() => handleClick("costs")}
            />
            <SmallCard
              text="Key metrics"
              onClick={() => handleClick("keyMetrics")}
            />
          </div>
          <Typography variant="h2" className="text-black font-medium">
            Market
          </Typography>
          <div className="flex flex-col gap-5 mt-5 mb-8">
            <SmallCard
              text="Customer segments"
              onClick={() => handleClick("customer")}
            />
            <SmallCard
              text="Unfair advantage"
              onClick={() => handleClick("unfairAdvantage")}
            />
            <SmallCard
              text="Revenue streams"
              onClick={() => handleClick("revenue")}
            />
            <SmallCard
              text="Channels"
              onClick={() => handleClick("channels")}
            />
          </div>
        </div>
      </AppWrapper>
      <LeanQuestionModal modalInfo={modalInfo} onClose={handleModalClose} />
    </>
  );
};
