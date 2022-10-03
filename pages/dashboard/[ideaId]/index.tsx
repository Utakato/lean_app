import type { NextPage } from "next";
import { AuthWrapper } from "../../../features";
import { IdeaDashboardPage } from "../../../features/dashboard/pages/idea-dashboard";

const IdeaDashboard: NextPage = () => {
  return <AuthWrapper><IdeaDashboardPage/></AuthWrapper>;
};

export default IdeaDashboard;
