import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/form_login";
import Register from "./pages/auth/form_register";
import Navbar from "./components/Nav";
// import Footer from './components/footer'

import "./App.css";
import IfIsLogin from "./components/PrivateRouteIfIsLogin";
import { AuthProvider } from "./contexts/userContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={
              <IfIsLogin>
                <Login />
              </IfIsLogin>
            }
          />
          <Route
            path="/register"
            element={
              <IfIsLogin>
                <Register />
              </IfIsLogin>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </AuthProvider>
  );
}
