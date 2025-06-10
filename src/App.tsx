import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { useUserStore } from "./stores/useUserStore";

function App() {
  const username = useUserStore((state) => state.username);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={username ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/home"
          element={username ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
