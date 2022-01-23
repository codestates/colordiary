import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: pink;
  width: 1300px;
  height: 700px;
  padding: 10px;
`;

const UserInfoDiv = styled.div`
  border: 1px solid;
  width: 300px;
  height: 200px;
  text-align: center;
  align-items: center;
  padding: 30px 0;
  margin: 20px auto;
`;

const Form = styled.form`
  border: 1px solid;
  width: 400px;
  text-align: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
`;

const FlexDiv = styled.div`
  display: flex;
`;
const H3 = styled.h3`
  margin-left: 15px;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-top: 15px;
  width: 200px;
  height: 30px;
`;
const ButtonDiv = styled.div`
  text-align: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
`;

const Button = styled.button`
  margin: 20px 10px;
  font-size: 20px;
`;

function MyPage() {
  return (
    <Div>
      <UserInfoDiv>
        <h1>User Info</h1>
        <p>YOURNAME :</p>
        <p>EMAIL :</p>
        <p>MOBILE :</p>
      </UserInfoDiv>
      <Form>
        <h2>비밀번호를 변경 할 수 있습니다.</h2>
        <FlexDiv>
          <H3>현재 비밀번호 : </H3>
          <Input type="text" placeholder="Old password" />
        </FlexDiv>
        <FlexDiv>
          <H3>새 비밀번호 : </H3>
          <Input type="text" placeholder="New password" />
        </FlexDiv>
        <FlexDiv>
          <H3>새 비밀번호 확인 : </H3>
          <Input type="text" placeholder="Confirm password" />
        </FlexDiv>
      </Form>
      <ButtonDiv>
        <Button>로그아웃</Button>
        <Button>회원 탈퇴</Button>
      </ButtonDiv>
    </Div>
  );
}

export default MyPage;
