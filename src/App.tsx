import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase/client";
import { useGlobalState } from "./globalState";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useGlobalState("user");
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (u) => {
      setUser(u);
      setLoadingAuth(false);
    });
  }, []);

  return (
    <div>
      {loadingAuth ? (
        <></>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movie/:id" element={<Movie />} />
            {user ? (
              <Route path="/profile" element={<Profile />} />
            ) : (
              <></>
            )}

            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
