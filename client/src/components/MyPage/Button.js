import React from "react";
import LogOut from "./LogOut";
import WithDrawal from "./WithDrawal";
import styled from "styled-components";

const ButtonDiv = styled.div`
  text-align: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
`;

function Button({authToken , accessToken , userInfo , login}) {
  return (
    <div>
      <ButtonDiv>
        <LogOut authToken ={authToken} accessToken={accessToken}  userInfo = {userInfo} login ={login} />
        <WithDrawal authToken ={authToken} accessToken={accessToken}  userInfo = {userInfo} login ={login}/>
      </ButtonDiv>
    </div>
  );
}

export default Button;
