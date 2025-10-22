import WorkspaceSelector from "./WorkspaceSelector";
import "./Home.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useCurrentUseStore } from "../../modules/auth/current-user.state";
import { Navigate } from "react-router-dom";

function Home() {
  const { currentUser } = useCurrentUseStore();
  if (currentUser == null) return <Navigate to="/signin" />;

  return (
    <div className="slack-container">
      <WorkspaceSelector />
      <>
        <Sidebar />
        <MainContent />
      </>
    </div>
  );
}

export default Home;
