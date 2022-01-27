import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  background-color: pink;
  width: 1300px;
  height: 800px;
`;

const Form = styled.form`
  background-color: aliceblue;
  width: 600px;
  height: 500px;
  display: flex;
  text-align: center;
  align-items: center;
  margin: auto;
`;

const Box = styled.div`
  text-align: center;
  align-items: center;
  padding: 50px 0;
`;
const Fieldset = styled.fieldset`
  width: 400px;
  height: 300px;
  text-align: center;
  align-items: center;
  margin: auto;
`;

const InputDiv = styled.div`
  padding-top: 40px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 200px;
  margin: 10px 0;
`;

const Button = styled.button`
  margin: 10px;
  margin-top: 30px;
`;

function Login() {
  return (
    <Div>
      <Box>
        <h1>로그인</h1>
        <p>로그인 해서 자신의 색깔 달력을 보세요!</p>
      </Box>
      <Form>
        <Fieldset>
          <h2>Login</h2>
          <InputDiv>
            <Input type="text" placeholder="Email address" />
            <Input type="text" placeholder="password" />
          </InputDiv>
          <Button>LOGIN</Button>
        </Fieldset>
      </Form>
    </Div>
  );
}

export default Login;
