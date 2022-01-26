import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../Home";
import MyPage from "../MyPage/MyPage";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Nav from "./Nav";

function NavBar() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mypage" element={<MyPage />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;
