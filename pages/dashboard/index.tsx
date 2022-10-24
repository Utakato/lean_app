import type { NextPage } from "next";
import { AuthWrapper } from "../../features";
import { IdeaList } from "../../features/dashboard/pages/idea-list";

const Dashboard: NextPage = () => {
  return (
    <AuthWrapper>
      <IdeaList />
    </AuthWrapper>
  );
};

export default Dashboard;
