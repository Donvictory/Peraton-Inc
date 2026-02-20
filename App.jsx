import { Routes, Route } from "react-router-dom";
import Home from "./client/src/pages/Home";
import Login from "./client/src/pages/Login";
import Register from "./client/src/pages/Register";
import Dashboard from "./client/src/pages/Dashboard";
import Admin from "./client/src/pages/Admin";
import ProtectedRoute from "./client/src/routes/ProtectedRoute";
import JobApplication from "./client/src/pages/JobApplication";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/job-application" element={<JobApplication />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
