import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Div = styled.div`
  background-color: aliceblue;
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
  background-color: #cce5ff;
  border-color: #f5c6cb;
  text-align: center;
  align-items: center;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

function Login({ authToken, login, accessToken, userInfo }) {
  /* ''였다가 이메일 패스워드 입력해서 그것이 전송되면 (디비에서찾아서 어세스토큰을 발급해주고,쿠키를발급해줌)
  .then(받은 데이터(어세스토큰)를 헤더에 넣어서 겟요청해줌) */
  //console.log(props)
  // 로그인에 입력할 정보

  const navigator = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const loginfunc = (event) => {
  
    let headers = new Headers();
    headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    headers.append("Accept", "*/*");
    event.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      setErrorMessage("이메일과 비밀번호 모두 입력해주세요"); // react구현되었지만 에러메세지 잠깐뜨고 사라짐
    } else {
      axios.post("https://localhost:5000/login", {
        email:email,
        password:password
      },
     { headers : headers } 
      )
      .then(result => {
        console.log(result)
        if(result.data === null) {
          setErrorMessage("아이디와  비밀번호가 일치하지 않습니다")
        } else {
        console.log(result.data.data,"어세스토큰") 

        authToken(result.data.data)
        } //토큰 인증
        })
      .catch(err => console.log("로그인실패"))  
    }
  };

  return login ? (
    <div>
      <h1>🌸로그인 완료되었습니다.🌸</h1>
      <button onClick={() => navigator("../mycolor")}>My Color</button>
    </div>
  ) : (
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
              placeholder="Email address"
              onChange={handleInputValue("email")}
            />
            <Input
              type="text"
              placeholder="password"
              onChange={handleInputValue("password")}
            />
          </InputDiv>
          <ButtonDiv>
            <Button onClick={loginfunc}>LOGIN</Button>
          </ButtonDiv>
        </Fieldset>
      </Form>
      <Alert>{errorMessage}</Alert>
    </Div>
  );
}
export default Login;
