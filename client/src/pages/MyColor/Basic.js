import "./Basic.css";
import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Nav from "../NavBar/Nav";
import Home from "../Home";
import MyPage from "../MyPage/MyPage";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Mywriting from "./Mywriting";
import Mycolor from "./MyColor";
import Edit from "./Edit";
import Diary from "./Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function Basic() {
  //로그인 여부
  const [login, setLogin] = useState(false);
  //어세스토큰 저장소
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    mobile: "",
  });

  //1.토큰인증 받고 2.성공하면 로그인 상태변경 저장,토큰저장,받아온 데이터(유저정보)저장
  const authToken = (token) => {
    axios
      .get("https://localhost:5000/user_accesstoken", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        /* stateHandler(result) */
        setAccessToken(result);
        setLogin(true);
        setUserInfo({
          email: result.data.data.email,
          username: result.data.data.username,
          mobile: result.data.data.mobile,
        });
      });
  };
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  const dataId = useRef(0);
  // CREATE
  const onCreate = (date, content, icon) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        icon,
      },
    });
    dataId.current += 1;
  };
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (targetId, date, content, icon) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        icon,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Nav authToken={authToken} userInfo={userInfo} login={login} />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    authToken={authToken}
                    userInfo={userInfo}
                    login={login}
                  />
                }
              />
              <Route
                path="/mypage"
                element={
                  <MyPage
                    authToken={authToken}
                    accesstoken={accessToken}
                    userInfo={userInfo}
                    login={login}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <LogIn
                    authToken={authToken}
                    accesstoken={accessToken}
                    userInfo={userInfo}
                    login={login}
                  />
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/mywriting"
                element={
                  <Mywriting
                    authToken={authToken}
                    accesstoken={accessToken}
                    userInfo={userInfo}
                    login={login}
                  />
                }
              />
              <Route
                path="/mycolor"
                element={
                  <Mycolor
                    authToken={authToken}
                    accesstoken={accessToken}
                    userInfo={userInfo}
                    login={login}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <Edit
                    authToken={authToken}
                    accesstoken={accessToken}
                    userInfo={userInfo}
                    login={login}
                  />
                }
              />
              <Route
                path="/diary/:id"
                element={
                  <Diary
                    authToken={authToken}
                    accesstoken={accessToken}
                    userInfo={userInfo}
                    login={login}
                  />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default Basic;
