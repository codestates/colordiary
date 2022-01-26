import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../Home";
import MyColor from "../MyColor/MyColor";
import MyPage from "../MyPage/MyPage";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import MyWriting from "../MyWriting";
import Nav from "./Nav";
import axios from "axios";

function NavBar() {
  //로그인 여부
  const [login, setLogin] = useState(false);
  //어세스토큰 저장소
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: null,
    username: null,
    mobile: null,
  });

  //1.토큰인증 받고 2.성공하면 로그인 상태변경 저장,토큰저장,받아온 데이터(유저정보)저장
  const authToken = (result) => {
    axios
      .get("https://localhost:5000/user_accesstoken", {
        headers: result,
      })
      .then((result) => {
        setAccessToken(result); //토큰 저장
        setLogin(true); // 상태저장
        setUserInfo(
          //유저정보저장
          {
            email: result.data.userInfo.email,
            username: result.data.userInfo.username,
            mobile: result.data.userInfo.mobile,
          }
        ).catch((err) => console.log(err));
      });
  };

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mycolor" element={<MyColor />} />
          <Route exact path="/mywriting" element={<MyWriting />} />
          <Route exact path="/mypage" element={<MyPage />} />
          <Route
            exact
            path="/login"
            element={
              <LogIn
                authToken={authToken}
                login={login}
                accessToken={accessToken}
                userInfo={userInfo}
              />
            }
          />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;
