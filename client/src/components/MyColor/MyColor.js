import React, { useState } from "react";
import axios from "axios";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import styled from "styled-components";

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
  const [mycontent, setMycontent] = useState({
    day: "",
    mood: "",
    message: "",
  });
  const { day, mood, message } = mycontent;
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
          <select onChange={handleInputValue("mood")} name="mood">
            <option>😆</option>
            <option>😃</option>
            <option>😐</option>
            <option>😢</option>
            <option>😱</option>
          </select>
        </div>
        <Textareaa
          name="message"
          form="feelsForm"
          placeholder="What happened today?"
          onChange={handleInputValue("message")}
        ></Textareaa>
        <PickerDiv>
          <DayPickerInput
            name="day"
            onDayChange={(day) => console.log(day)}
            onChange={handleInputValue("date")}
          />
        </PickerDiv>
        <Button type="submit" name="button" onClick={handleSubmit}>
          Submit
        </Button>
      </FrameDiv>
      <Alert>{errorMessage}</Alert>

      <div>
        <h1>ALL WRITING</h1>
        <p>
          {day},{mood},{message}
        </p>
      </div>
    </Div>
  );
}

export default Mycolor;
