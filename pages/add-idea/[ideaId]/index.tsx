import type { NextPage } from "next";
import { AuthWrapper, LeanCanvasForm } from "../../../features";

const AddIdea: NextPage = () => {
  return (
    <AuthWrapper>
      <LeanCanvasForm step={0} />
    </AuthWrapper>
  );
};

export default AddIdea;
