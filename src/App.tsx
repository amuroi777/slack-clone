import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreateWorkspaceModal from "./pages/Home/WorkspaceSelector/CreateWorkspaceModal";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/" element={<CreateWorkspaceModal />} />
          <Route path="/:workspaceId/:channelId" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
