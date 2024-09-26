import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Logo from "./components/logo/Logo";
import Match from "./pages/Match";
import Bar from "./components/bar/Bar";
import Signout from "./pages/Signout";
import User from "./pages/User";
import ChangePassword from "./pages/ChangePassword";
import Comments from "./components/comments/Comments";
import LiveFootballMatches from "./pages/LiveFootballMatches";
import LiveBasketballMatches from "./pages/LiveBasketballMatches";
import LiveTennisMatches from "./pages/LiveTennisMatches";
import LiveVolleyballMatches from "./pages/LiveVolleyballMatches";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/matches" element={
          <>
            <Logo />
            <Bar />
            <Home />
          </>
        } />

        <Route path="/matches/:id" element={
          <>
            <Logo />
            <Bar />
            <div id="box">
              <Match />
              <hr className="bar" />
              <Comments />
            </div>
          </>
        } />

        <Route path="/football/live" element={
          <>
            <Logo />
            <Bar />
            <LiveFootballMatches />
          </>
        } />

        <Route path="/basketball/live" element={
          <>
            <Logo />
            <Bar />
            <LiveBasketballMatches />
          </>
        } />

        <Route path="/tennis/live" element={
          <>
            <Logo />
            <Bar />
            <LiveTennisMatches />
          </>
        } />

        <Route path="/volleyball/live" element={
          <>
            <Logo />
            <Bar />
            <LiveVolleyballMatches />
          </>
        } />

        <Route path="/users" element={
          <>
            <Logo />
            <Bar />
            <User />
          </>
        } />

        <Route path="/changePassword" element={
          <>
            <Logo />
            <Bar />
            <ChangePassword />
          </>
        } />

        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
