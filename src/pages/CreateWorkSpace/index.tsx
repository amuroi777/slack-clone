import { Navigate } from "react-router-dom";
import { useCurrentUseStore } from "../../modules/auth/current-user.state";
import CreateWorkspaceModal from "../Home/WorkspaceSelector/CreateWorkspaceModal";

function CreateWorkSpace() {
  const { currentUser } = useCurrentUseStore();

  if (currentUser == null) return <Navigate to="/signin" />;

  return (
    <div>
      <CreateWorkspaceModal />
    </div>
  );
}

export default CreateWorkSpace;
