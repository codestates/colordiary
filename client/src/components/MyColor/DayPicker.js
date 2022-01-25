import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import styled from "styled-components";

const Div = styled.div`
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
export default function DayPicker() {
  return (
    <Div>
      <div>
        <h1>How are you feeling?</h1>
        <label>Today I feel: </label>
        <select>
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
      ></Textareaa>
      <PickerDiv>
        <DayPickerInput onDayChange={(day) => console.log(day)} />
      </PickerDiv>
      <Button type="submit" name="button">
        Submit
      </Button>
    </Div>
  );
}
