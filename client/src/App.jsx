import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import ProtectedRoute from "./routes/ProtectedRoute";
import JobApplication from "./pages/JobApplication";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/ContactUs";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job-application" element={<JobApplication />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
