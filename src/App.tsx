import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { authRepository } from "./modules/auth/auth.repository";
import { useCurrentUseStore } from "./modules/auth/current-user.state";
import CreateWorkSpace from "./pages/CreateWorkSpace";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { setCurrentUser } = useCurrentUseStore();

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const user = await authRepository.getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div />;

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/" element={<CreateWorkSpace />} />
          <Route path="/:workspaceId/:channelId" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
