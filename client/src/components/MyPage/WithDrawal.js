import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ModalBackdrop = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 700px;
  background-color: rgb(0, 0, 0, 0.8);
`;

const ModalBtn = styled.button`
  margin-top: 10px;
  padding: 20px;
  cursor: grab;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  width: 500px;
  height: 150px;
  > .btn {
    cursor: pointer;
    margin-left: 10px;
  }
`;

const WithDrawal = ({accessToken, login, userInfo}) => {
  const [logOut, setLogOut] = useState(false);

  // console.log("엑세스토큰을 찾아봅시다 1",{accessToken})
  // console.log("엑세스토큰을 찾아봅시다 2", accessToken)


  const openModalHandler = (e) => {
    
    setLogOut(!logOut);
  };

  const userDelete = (token) => {
    axios.delete("https://localhost:5000/user_delete", {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(()=> {
      console.log("회원탈퇴 완료")
    }).catch((err) => {
      console.log("회원탈퇴 과정에서 오류 발생", err)
    })
  } 
    

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {logOut ? "Opened!" : "회원탈퇴"}
        </ModalBtn>
        {logOut ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <div>회원탈퇴 되었습니다.</div>
              <button className="btn" onClick={openModalHandler} onClick={userDelete(accessToken)} >
                Home
              </button>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default WithDrawal;