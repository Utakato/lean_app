import { TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  AppWrapper,
  FormButtons,
  ProgressBar,
  QuestionData,
  Topbar,
} from "../../../../components";
import { addNewIdeaField } from "../../../../core/api/lean-canvas";

import { leanCanvasQuestions } from "../../../../core/constants/LeanCanvasQuestions";
import { useAppSelector } from "../../../../core/redux/store";
import { LeanCanvasCongratulationsScreen } from "./components/LeanCanvasCongratulationsScreen";

enum inputType {
  SINGLE = "single",
  MULTILINE = "multiline",
}

interface LeanCanvasFormProps {
  step: number;
}

const createPayload = (key: string, value: string) => {
  return { [key]: value };
};

export const LeanCanvasForm: React.FC<LeanCanvasFormProps> = ({}) => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [value, setValue] = useState("");
  const [displayCongratulationsScreen, setDisplayCongratulationsScreen] =
    useState(false);

  const { uid } = useAppSelector((root) => root.authentication);

  const currentQuestion = leanCanvasQuestions[step];
  const isMultiline = currentQuestion.inputType === inputType.MULTILINE;
  const totalQuestionsCount = leanCanvasQuestions.length;
  const inputIsEmpty = value.length === 0;
  const { ideaId } = router.query;

  const handlePrimary = async (e: any) => {
    if (step === totalQuestionsCount - 1) {
      setDisplayCongratulationsScreen(true);
      setValue("");
    } else {
      e.preventDefault();
      const payload = createPayload(currentQuestion.fieldName, value);
      const data = {
        ideaId: ideaId as string,
        userId: uid,
        payload: payload,
      };
      console.log(data);
      const res = await addNewIdeaField(data);
      console.log(res);
      setValue("");
      setStep((s) => s + 1);
    }
  };

  const handleSecondary = () => {
    if (step === totalQuestionsCount - 1) {
      setDisplayCongratulationsScreen(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <AppWrapper>
        {displayCongratulationsScreen ? (
          <LeanCanvasCongratulationsScreen />
        ) : (
          <>
            <Topbar
              onBack={() => console.log("hey")}
              otherStyles="absolute top-0"
            />
            <form
              id="leanCanvas"
              className="w-full flex flex-col gap-8"
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
                <ProgressBar total={totalQuestionsCount} current={step} />

                <FormButtons
                  disabledPrimary={inputIsEmpty}
                  formId="leanCanvas"
                  primaryText="Next"
                  secondaryText="Skip"
                  primaryHandler={(e) => handlePrimary(e)}
                  secondaryHandler={handleSecondary}
                />
              </div>
            </form>
          </>
        )}
      </AppWrapper>
    </>
  );
};
