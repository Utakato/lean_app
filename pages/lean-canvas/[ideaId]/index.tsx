import type { NextPage } from "next";
import { AuthWrapper } from "../../../features";
import { LeanCavnasPage } from "../../../features/leanCanvas/pages/lean-canvas";

const LeanCanvas: NextPage = () => {
  return (
    <AuthWrapper>
      <LeanCavnasPage />
    </AuthWrapper>
  );
};

export default LeanCanvas;
