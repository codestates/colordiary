import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import ChangePassword from "./ChangePassword";
import Button from "./Button";

const Div = styled.div`
  background-color: aliceblue;
  width: 100vw;
  height: 100vw;
  padding: 10px;
`;

function MyPage({ authToken, accesstoken, userInfo, login }) {
  const { username } = userInfo;
  return (
    <Div>
      <div>
        <h1>{username}님의 정보</h1>
        <UserInfo userInfo={userInfo} />
        <ChangePassword />
      </div>
      <Button />
    </Div>
  );
}

export default MyPage;
