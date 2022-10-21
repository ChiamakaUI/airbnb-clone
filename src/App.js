import "./Styles/App.css";
import Homes from "./pages/Homes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { useState, createContext, useEffect } from "react";
import HostHome from "./pages/HostHome";
import HostExperience from "./pages/HostExperience";
import BecomeHost from "./pages/BecomeHost";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

export const currentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    // getting stored value
    const User = localStorage.getItem("currentUser");
    const initialValue = JSON.parse(User);
    return initialValue || {};
  });
  // console.log(currentUser)

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setCurrentUser(currentUser);
  }, [currentUser]);
  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="rooms" element={<Rooms />}>
            <Route path=":roomId" element={<SingleRoom />} />
          </Route>
          <Route path="/host">
            <Route path="homes" element={<HostHome />} />
            <Route path="experience" element={<HostExperience />} />
          </Route>
          <Route path="become-a-host" element={<BecomeHost/>}/>
          <Route path="create-account" element={<SignUp/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </currentUserContext.Provider>
  );
}

export default App;

// name: "",
// email: "",
// image: "",