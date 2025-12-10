import { Navigate, useNavigate } from "react-router-dom";
import { useCurrentUseStore } from "../../modules/auth/current-user.state";
import CreateWorkspaceModal from "../Home/WorkspaceSelector/CreateWorkspaceModal";
import { workspaceRepository } from "../../modules/workspaces/workspace.repository";
import { useEffect, useState } from "react";
import type { Workspace } from "../../modules/workspaces/workspace.entity";

function CreateWorkSpace() {
  const { currentUser } = useCurrentUseStore();
  const navigate = useNavigate();
  const [homeWorkspace, setHomeWorkspace] = useState<Workspace>();
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchWorkspaces();
  }, [])

  const fetchWorkspaces = async () => {
    try{
      const workspace = await workspaceRepository.find()
      setHomeWorkspace(workspace[0]);
    } catch(error) {
      console.log('ワークスペースの取得に失敗しました', error);
    } finally {
      setIsLoading(false)
    }
  }

  const createWorkSpace = async (name: string) => {
    try {
      const newWorkspace = await workspaceRepository.create(name);
      navigate(`/${newWorkspace.id}/${newWorkspace.channels[0].id}`)
      console.log(newWorkspace);
    } catch (error) {
      console.error("ワークスペースの作成に失敗しました", error);
    }

  }

  if (loading) return <div />
  if (currentUser == null) return <Navigate to="/signin" />;
  if (homeWorkspace != null) return <Navigate to={`/${homeWorkspace.id}/${homeWorkspace.channels[0].id}`} />

  return (
    <div>
      <CreateWorkspaceModal onSubmit={createWorkSpace} />
    </div>
  );
}

export default CreateWorkSpace;
