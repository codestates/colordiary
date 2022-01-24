import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../img/logo.png";
import Button from "../NavBar/Button";

const Navi = styled.div`
  width: 99vw;
  height: 3vw;
  background-color: blanchedalmond;
  padding: 10px;
  padding-top: 20px;
`;

const Img = styled.img`
  background-image: url(${logo});
  width: 58px;
  height: 30px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  float: left;
`;

const LinkDiv = styled.div`
  margin-left: 10px;
`;

function Nav() {
  return (
    <Navi>
      <nav>
        <Left>
          <LinkDiv>
            <Link to="/">
              <Img />
            </Link>
          </LinkDiv>
          <LinkDiv>
            <Link to="/">Home</Link>
          </LinkDiv>
          <LinkDiv>
            <Link to="/mycolor">My Color</Link>
          </LinkDiv>
          <LinkDiv>
            <Link to="/mywriting">My Writing</Link>
          </LinkDiv>
          <LinkDiv>
            <Link to="/mypage">MyPage</Link>
          </LinkDiv>
        </Left>
        <Button />
      </nav>
    </Navi>
  );
}

export default Nav;
