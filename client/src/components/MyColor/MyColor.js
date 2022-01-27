import React from "react";
import styled from "styled-components";
import { useState } from "react";
//import { useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

axios.defaults.withCredentials = true; 

const BigDiv = styled.div`
  text-align: center;
  background-color: aliceblue;
  width: 100vw;
  height: 800px;
`;

const ImgDiv = styled.div`
  display: flex;
`;

const Img = styled.div`
  margin: 10px;
  width: 250px;
  height: 250p;
`;

const Textarea = styled.input`
  background-color: #e6f4fa;
  text-align: center;
  margin: 0 auto;
  width: 500px;
  height: 100px;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.65);
`;

const Button1 = styled.button`
  background-color: #e6f4fa;
  float: left;
  margin-left: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65);
  &:hover {
    background-color: #cce5ff;
  }
`;

const Button2 = styled.button`
  background-color: #e6f4fa;
  float: right;
  margin-right: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65);
  &:hover {
    background-color: #cce5ff;
  }
`;
function MyColor({authToken, accessToken, userInfo}) {
// 일단 <작성완료> onclick 이벤트를 실행시키자마자 토큰인증함수를 실행시키고(어세스토큰을 주어 서버에서 )
//모든정보를 받아온다. 그리고는 
    
    const {email} = userInfo
    const[startDate, setStartDate] = useState(new Date());
    const[icon, setIcon] = useState(null)
    const[content, setContent] = useState("")
    console.log(startDate,")()()()(")
    
  const iconAddress = {  
      '1':"assets/emotion1.png",
      '2':"assets/emotion2.png",
      '3':"assets/emotion3.png",
      '4':"assets/emotion4.png",
      '5':"assets/emotion5.png"
    }
    // 아이콘 픽
    const pickFunc1 = () => {
        setIcon(1)
        console.log("1")
    }
    const pickFunc2 = () => {
        setIcon(2)
        console.log("2")
    }
    const pickFunc3 = () => {
        setIcon(3)
        console.log("3")
    }
    const pickFunc4 = () => {
        setIcon(4)
        console.log("4")
    }
    const pickFunc5 = () => {
        setIcon(5)
        console.log("5")
    }

  // 컨텐트
  const contentDatahandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  /*  useEffect(() => {
       console.log('클릭할때만 나와요')
    },[content])  */

  // 포스트요청
  let body = { email: email, date: startDate, icon: icon, content: content };
  console.log(body);

    // 포스트요청
    let body = {email: email, date: startDate, icon: icon,  content: content}
    console.log(body)
    
    const clickPost = (token) => {
        console.log(accessToken, "토큰이 나왔니?")
        axios.post("https://localhost:5000/user_mycolor", body,{
        headers : {
            Authorization: 'Bearer ' + token
        }  
    })
    .then(result => console.log(result))
    
    }
    const clickDelete = (token) => {
        axios.delete("https://localhost:5000/user_mycolor", {
            headers : {
                Authorization: 'Bearer ' + token
            }     
        }).then(result => console.log(result))
    }


  return (
    <div>
      <BigDiv>
        <div>
          <h1>NEW DAIRY</h1>
        </div>
        <section>
          <div>
            <h3>오늘은 언제인가요?</h3>
            <DatePicker
              dateFormat="yyyy년 MM월 dd일"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <h3>오늘의 감정</h3>
          <ImgDiv className="img">
            <Img onClick={pickFunc1}>
              <img src="assets/emotion1.png" />
              <p>GREAT!!</p>
            </Img>
            <Img onClick={pickFunc2}>
              <img src="assets/emotion2.png" />
              <p>GOOD!!</p>
            </Img>
            <Img onClick={pickFunc3}>
              <img src="assets/emotion3.png" />
              <p>SOSO!!</p>
            </Img>
            <Img onClick={pickFunc4}>
              <img src="assets/emotion4.png" />
              <p>BAD!!</p>
            </Img>
            <Img onClick={pickFunc5}>
              <img src="assets/emotion5.png" />
              <p>TERRIBLE!!</p>
            </Img>
          </ImgDiv>
          <div>
            <h3>오늘의 일기</h3>
            <Textarea
              onChange={contentDatahandler}
              placeholder="오늘 어땠나요?"
            ></Textarea>
          </div>
        </section>
        <div>
          <h3>오늘의 일기</h3>
          <Textarea onChange={contentDatahandler} placeholder="오늘 어땠나요?"></Textarea>
        </div>
      
      <div>
        <Button1 onClick={clickDelete(accessToken)}>취소하기</Button1>
        <Button2 onClick={clickPost(accessToken)}>작성완료</Button2> 
      </div>
    </BigDiv>
        </div>
      
  );
}

export default MyColor;
