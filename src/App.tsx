import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { useUserStore } from "./stores/useUserStore";

function App() {
  const username = useUserStore(
    (state: { username: string }) => state.username
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={username ? <Navigate to="/home" replace /> : <LoginPage />}
        />
        <Route
          path="/home"
          element={username ? <HomePage /> : <Navigate to="/login" replace />}
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
