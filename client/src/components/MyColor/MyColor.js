<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import styled from "styled-components";
//import Movie from "./Movie"
axios.defaults.withCredentials = true;

const Div = styled.div`
  background-color: aliceblue;
  width: 99vw;
  height: 40vw;
`;
const FrameDiv = styled.div`
  background-color: antiquewhite;
  width: 50vw;
  height: 30vw;
  text-align: center;
  align-items: center;
  margin: auto;
`;

const Textareaa = styled.textarea`
  width: 25vw;
  height: 10vw;
  margin-top: 20px;
`;
const PickerDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
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


function Mycolor() {

  const url = 'https://image.tmdb.org/t/p/w200'
  const [movie, setMovie] = useState({
    title : 'Spider-Man 2',
    overview: '우연한 사고로 특별한 능력을 갖게된 피터 파커는 대학생과 슈퍼 히어로의 신분을 오가며 짜릿한 생활을 하지만 사랑 하는 메리 제인에게조차 자신의 마음을 열 수 없는 현실은 그들을 안타까운 로맨스로 이끈다. 한편 스파이더맨에게 아버지를 잃고 복수심에 불타는 피터의 친구 해리가 연구 중 폭발로 기계촉수와 엄청난 파워를 갖게된 닥터 옥토퍼스에게 뿌리치지 못할 제안을 하면서 도시 전체가 걷잡을 수 없는 위험에 휘말리게 되고, 스파이더맨의 운명은 점차 예측불가능한 상황으로 전개되는데...',
    backdrop_path: url +'/hHrdrG8aRkLlrQaAJZjKhaweJNa.jpg'
  
  })
  const showMovie = () => {
    const randomNum = (min, max) => {
      let randNum = Math.floor(Math.random()*(max-min+1)) + min; 
      return randNum;
    }  
    const api = "https://api.themoviedb.org/3/movie/popular?api_key=f2320e6d56f1183456d8f25bc84af5f1&language=ko&page=" +randomNum(1,100)
    axios.get(api,{
        withCredentials: false   
    })
    .then(result => {
      console.log(result.data)
      const index = randomNum(1,19)
      const {title, overview, backdrop_path} = result.data.results[index]
      setMovie({
        title, 
        overview,
        backdrop_path: url + backdrop_path
      })
    })
  }



  const [mycontent, setMycontent] = useState({
    date: "",
    mood: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputValue = (key) => (e) => {
    setMycontent({ ...mycontent, [key]: e.target.value });
  };

  

  const handleSubmit = () => {
    if (
      mycontent.date !== "" &&
      mycontent.mood !== "" &&
      mycontent.message !== ""
    ) {
      axios.post("https://localhost:5000/user_mycolor", {
        date: mycontent.date,
        mood: mycontent.mood,
        message: mycontent.message,
      });
    } else {
      setErrorMessage("다 입력되지 않았습니다.");
    }
  };
  return (
    <Div>
      <FrameDiv>
        <div>
          <h1>How are you feeling?</h1>
          <label>Today I feel: </label>
          <select onChange={handleInputValue("mood")}>
            <option>😆</option>
            <option>😃</option>
            <option>😐</option>
            <option>😢</option>
            <option>😱</option>
          </select>
        </div>
        <Textareaa
          name="feelsMessage"
          form="feelsForm"
          placeholder="What happened today?"
          onChange={handleInputValue("message")}
        ></Textareaa>
        <PickerDiv>
          <DayPickerInput
            onDayChange={(day) => console.log(day)}
            onChange={handleInputValue("date")}
          />
        </PickerDiv>
        <Button type="submit" name="button" onClick={handleSubmit}>
          Submit
        </Button>
      </FrameDiv>
      <Alert>{errorMessage}</Alert>
      // 무비컴포넌트 만들어줄까???
      <div> 
        <h1>오늘의 추천 Movie</h1>
        <img src ={movie.backdrop_path}/>
        <div>{movie.title}</div>
        <div>{movie.overview}</div>  
      </div>
      <button onClick = {showMovie}>다른추천</button>
    </Div>
  );
}
export default Mycolor;
=======
import DiaryEditor from "./components/DiaryEditor";

const New = () => {
  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
>>>>>>> 9342f6fafe461d35d15d36f256172d1238bdfaf3
