import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/auth/form_login";
import Register from "./pages/auth/form_register";
import Navbar from "./components/NavALERTE";
// import Footer from './components/footer'

import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard";
import GuestRoute from "./components/private/GuestRoute";
import AuthRoute from "./components/private/AuthRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/home" element={<Home />} />

        <Route element={<AuthRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </AuthProvider>
  );
}
