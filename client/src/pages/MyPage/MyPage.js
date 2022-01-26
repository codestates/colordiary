import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import ChangePassword from "./ChangePassword";
import Button from "./Button";

const Div = styled.div`
  background-color: pink;
  width: 100vw;
  height: 100vw;
  padding: 10px;
`;

function MyPage() {
  return (
    <Div>
      <div>
        <UserInfo />
        <ChangePassword />
      </div>
      <Button />
    </Div>
  );
}

export default MyPage;
