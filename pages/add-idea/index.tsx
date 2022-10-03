import type { NextPage } from "next";
import { AuthWrapper } from "../../features";
import { AddFirstIdeaPage } from "../../features/leanCanvasForm/pages/add-first-idea";

const AddFirstIdea: NextPage = () => {
  return (
    <AuthWrapper>
      <AddFirstIdeaPage />
    </AuthWrapper>
  );
};

export default AddFirstIdea;
