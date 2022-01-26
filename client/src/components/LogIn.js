import React, { useState } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const Div = styled.div`
  background-color: pink;
  width: 100vw;
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
  padding: 10px;
`;

const ButtonDiv = styled.div`
  text-align: center;
`;

const Alert = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  text-align: center;
  align-items: center;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

function Login({ handleResponseSuccess }) {
  //  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    if (loginInfo.email !== "" && loginInfo.password !== "") {
      axios
        .post("https://localhost:5000/login", {
          email: loginInfo.email,
          password: loginInfo.password,
        })
        .then(handleResponseSuccess);
    } else {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
    }
  };
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
            <Input
              type="text"
              onChange={handleInputValue("email")}
              placeholder="Email address"
            />
            <Input
              type="text"
              onChange={handleInputValue("password")}
              placeholder="password"
            />
          </InputDiv>
        </Fieldset>
      </Form>
      <ButtonDiv>
        <Button type="submit" onClick={handleLogin}>
          LOGIN
        </Button>
      </ButtonDiv>
      <Alert>{errorMessage}</Alert>
    </Div>
  );
}
export default Login;
