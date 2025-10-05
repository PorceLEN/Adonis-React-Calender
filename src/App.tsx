import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/form_login";
import Register from "./pages/auth/form_register";
import Navbar from "./components/Nav";
// import Footer from './components/footer'

import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";
import IsLogin from "./components/PrivateRouteIfIsLogin";

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
              <IsLogin>
                <Login />
              </IsLogin>
            }
          />

          <Route
            path="/register"
            element={
              <IsLogin>
                <Register />
              </IsLogin>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </AuthProvider>
  );
}
