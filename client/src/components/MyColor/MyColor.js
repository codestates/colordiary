import React from 'react'
import styled from "styled-components";

const BigDiv = styled.div`
  background-color: aliceblue;
  width: auto;
  height: auto;
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
`;
function MyColor() {
    return (
        <div>
            <BigDiv>
      <div>
        <h1>NEW DAIRY</h1>
      </div>
      <section>
        <div>
          <h3>오늘은 언제인가요?</h3>
          <input type="date" />
        </div>
        <h3>오늘의 감정</h3>
        <ImgDiv className="img">
          <Img>
            <img src="assets/emotion1.png" />
            <p>GREAT!!</p>
          </Img>
          <Img>
            <img src="assets/emotion2.png" />
            <p>GOOD!!</p>
          </Img>
          <Img>
            <img src="assets/emotion3.png" />
            <p>SOSO!!</p>
          </Img>
          <Img>
            <img src="assets/emotion4.png" />
            <p>BAD!!</p>
          </Img>
          <Img>
            <img src="assets/emotion5.png" />
            <p>TERRIBLE!!</p>
          </Img>
        </ImgDiv>
        <div>
          <h3>오늘의 일기</h3>
          <Textarea placeholder="오늘 어땠나요?"></Textarea>
        </div>
      </section>
      <div>
        <Button1>취소하기</Button1>
        <Button2>작성완료</Button2>
      </div>
    </BigDiv>
        </div>
    )
}

export default MyColor
