import React from "react";
import styled from "styled-components";
import  { useState } from "react";
import axios from 'axios';
axios.defaults.withCredentials = true; 

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
  padding: 10px;
`;

const ButtonDiv = styled.div`
  text-align: center;
`;

function Login({authToken,login,accessToken}) {
  /* ''였다가 이메일 패스워드 입력해서 그것이 전송되면 (디비에서찾아서 어세스토큰을 발급해주고,쿠키를발급해줌)
  .then(받은 데이터(어세스토큰)를 헤더에 넣어서 겟요청해줌) */
  //console.log(props)
  // 로그인에 입력할 정보
  const [loginInfo, setLoginInfo] = useState({
    email:'',
    password:''
  })
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };


  const loginfunc = () => {
    const {email, password} = loginInfo
    if(!email || !password) {
        setErrorMessage("이메일과 비밀번호 모두 입력해주세요") // react구현되었지만 에러메세지 잠깐뜨고 사라짐
    } else {
      axios.post("https://localhost:5000/login", {
        loginInfo
      })
      .then(result => {
        authToken(result.data) //토큰 인증
      })  
    }
  }


  return login ? 
  (
    <div>
      <h1>로그인 완료되었습니다.</h1>
    </div>
  )  
    : (
    <Div>
      <Box>
        <h1>로그인</h1>
        <p>로그인 해서 자신의 색깔 달력을 보세요!</p>
      </Box>
      <Form>
        <Fieldset>
          <h2>Login</h2>
          <InputDiv>
            <Input type="text" placeholder="Email address" onChange = {handleInputValue('email')}/>
            <Input type="text" placeholder="password" onChange = {handleInputValue('password')}/>
          </InputDiv>
          <ButtonDiv>
            <Button onClick={loginfunc} >LOGIN</Button>
          </ButtonDiv>
        </Fieldset>
      </Form>
      <Div>{errorMessage}</Div>      
    </Div>
    
  );

}
export default Login;
