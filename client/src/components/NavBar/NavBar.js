import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react"
import Home from "../Home";
import MyColor from "../MyColor/MyColor";
import MyPage from "../MyPage/MyPage";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import MyWriting from "../MyWriting/MyWriting"
import Nav from "./Nav";
import axios from "axios";

function NavBar() {
  
 //로그인 여부
 const [login, setLogin] = useState(false);
 //어세스토큰 저장소
 const [accessToken, setAccessToken] = useState(null);
 const [userInfo, setUserInfo] = useState({
   email: '',
   username: '',
   mobile: ''
 })
 
 //1.토큰인증 받고 2.성공하면 로그인 상태변경 저장,토큰저장,받아온 데이터(유저정보)저장
 const authToken = (token) => {
    setAccessToken(token)
   axios.get("https://localhost:5000/user_accesstoken",{
    headers : {
      Authorization: 'Bearer ' + accessToken
    }
    }
    )
    .then(result => {
      /* stateHandler(result) */
      console.log(result ,"DDDDDD")
       // setAccessToken(result)
        setLogin(true)
        setUserInfo(
    {
      email: result.data.data.email,
      username: result.data.data.username,
      mobile: result.data.data.mobile    
    }) 
    })
    }  

    console.log(accessToken,'🎟')

  return (
    <Router>
      <div>
       <Nav authToken ={authToken} userInfo = {userInfo} login ={login} /> 
        <Routes>
         // <Route exact path="/" element={<Home authToken ={authToken} userInfo = {userInfo} login ={login}/>} />
          <Route exact path="/mycolor" element={<MyColor authToken ={authToken} userInfo = {userInfo} login ={login} accessToken ={accessToken}/>} />
          <Route exact path="/mywriting" element={<MyWriting authToken ={authToken} accesstoken ={accessToken} userInfo = {userInfo} login ={login}/>} />
          <Route exact path="/mypage" element={<MyPage accessToken={accessToken}  userInfo = {userInfo} login ={login} />} />
          <Route exact path="/login" element={<LogIn authToken ={authToken} login ={login} accessToken={accessToken} userInfo={userInfo} />} />
          <Route exact path="/signup" element={<SignUp  />} />
        </Routes>
      </div>
    </Router>
  );
    
}
export default NavBar;
