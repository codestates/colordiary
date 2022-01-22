import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/LogIn";
import LogOut from "./components/LogOut";
import MyColor from "./components/MyColor";
import MyPage from "./components/MyPage";
import MyWriting from "./components/MyWriting";
import NavBar from "./components/NavBar";
import RemoveAccount from "./components/RemoveAccount";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, routes, Route, Link } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <div>
        {/*
          A <routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/mycolor" element={<MyColor />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/mywriting" element={<MyWriting />} />
          <Route path="/removeaccount" element={<RemoveAccount />} />
          <Route path="/login" element={<SignUp />} />
        </routes>
      </div>
    </Router>
  );
}

export default App;
