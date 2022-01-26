import React from "react";
import styled from "styled-components";

const UserInfoDiv = styled.div`
  border: 1px solid;
  width: 300px;
  height: 200px;
  text-align: center;
  align-items: center;
  padding: 30px 0;
  margin: 20px auto;
`;

function UserInfo() {
  return (
    <div>
      <UserInfoDiv>
        <h1>User Info</h1>
        <p>YOURNAME :</p>
        <p>EMAIL :</p>
        <p>MOBILE :</p>
      </UserInfoDiv>
    </div>
  );
}

export default UserInfo;
