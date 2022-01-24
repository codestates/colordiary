import React, { useState } from "react";
import styled from "styled-components";

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
  height: 350px;
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

function Signup() {
  return (
    <Div>
      <Box>
        <p>회원가입 하시겠습니까?</p>
        <p>회원 가입을 하시면 캘린더에 자신의 색깔을 넣을 수 있습니다!</p>
        <p>지금 시작해 보세요!</p>
      </Box>
      <Form>
        <Fieldset>
          <legend>Sign up for a free account</legend>
          <InputDiv>
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Email address" />
            <Input type="text" placeholder="Create password" />
            <Input type="text" placeholder="Confirm password" />
            <Input type="text" placeholder="Mobile" />
          </InputDiv>
          <Button>SiGN UP</Button>
          <Button>LOGIN</Button>
        </Fieldset>
      </Form>
    </Div>
  );
}

export default Signup;
