import { Typography, TextField, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useMemo, useEffect } from "react";
import {
  AppWrapper,
  Topbar,
  QuestionData,
  FormButtons,
} from "../../../../../components";
import { addNewIdeaField } from "../../../../../core/api/lean-canvas";
import { leanCanvasQuestions } from "../../../../../core/constants/LeanCanvasContent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../core/redux/store";
import { Idea, getUserIdeasAction } from "../../../../authentication";
import { LeanCanvasCongratulationsScreen } from "../../../../leanCanvasForm/pages/lean-canvas-form/components/LeanCanvasCongratulationsScreen";

enum inputType {
  SINGLE = "single",
  MULTILINE = "multiline",
}

interface LeanQuestionModalProps {
  modalInfo: { open: boolean; step: number };
  onClose: () => void;
}

const createPayload = (key: string, value: string) => {
  return { [key]: value };
};

export const LeanQuestionModal: React.FC<LeanQuestionModalProps> = ({
  modalInfo,
  onClose,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [displayCongratulationsScreen, setDisplayCongratulationsScreen] =
    useState(false);

  const { uid, user } = useAppSelector((root) => root.authentication);
  const { open, step } = modalInfo;
  const currentQuestion = leanCanvasQuestions[step];

  const isMultiline = currentQuestion.inputType === inputType.MULTILINE;
  const totalQuestionsCount = leanCanvasQuestions.length;
  const inputIsEmpty = value?.length === 0;
  const { ideaId } = router.query;
  const activeIdea = useMemo(
    () => user.ideas.filter((idea) => idea.id === ideaId)[0],
    [user.ideas, ideaId]
  ) as Idea;

  useEffect(() => {
    if (activeIdea?.leanCanvas?.[currentQuestion.fieldName]) {
      const currentAnswer = activeIdea.leanCanvas[currentQuestion.fieldName];
      setValue(currentAnswer as string);
    }
  }, [activeIdea, currentQuestion]);

  useEffect(() => {
    if (uid) {
      dispatch(getUserIdeasAction(uid));
    }
  }, [uid]);

  const handlePrimary = async (e: any) => {
    e.preventDefault();
    const payload = createPayload(currentQuestion.fieldName, value);
    const data = {
      ideaId: ideaId as string,
      userId: uid,
      payload: payload,
    };
    console.log(data);
    const res = await addNewIdeaField(data);
    handleSecondary();
  };

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSecondary = () => {
    // This creates some MUI trapfocus ref error if given directly to secondaryHandler on FormButtons
    // probably not this, this happened on some other
    onClose();
    setValue("");
  };

  return (
    <Modal open={open}>
      <AppWrapper>
        {displayCongratulationsScreen ? (
          <LeanCanvasCongratulationsScreen />
        ) : (
          <>
            <Topbar onBack={handleSecondary} otherStyles="absolute top-0" />
            <form
              // id="leanCanvas"
              className="w-full flex flex-col gap-8 px-5 pt-20"
              // onSubmit={handleSubmit((data) => console.log(data))}
            >
              <QuestionData
                title={currentQuestion.title}
                modalContent={currentQuestion.modalComponent}
              >
                <Typography
                  variant="body1"
                  className="text-textSecondary whitespace-pre-wrap"
                >
                  {currentQuestion.description}
                </Typography>
              </QuestionData>
              <TextField
                multiline={isMultiline}
                rows="4"
                fullWidth
                autoFocus
                placeholder={currentQuestion.title}
                required
                // {...register(currentQuestion.fieldName)}
                onChange={onChange}
                value={value}
              />
              <div className="flex flex-col w-full items-center gap-5">
                <FormButtons
                  disabledPrimary={inputIsEmpty}
                  formId="leanCanvas"
                  primaryText="Save"
                  secondaryText="Cancel"
                  primaryHandler={(e) => handlePrimary(e)}
                  secondaryHandler={handleSecondary}
                />
              </div>
            </form>
          </>
        )}
      </AppWrapper>
    </Modal>
  );
};
