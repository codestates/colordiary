import React from "react";
import DayPicker from "./DayPicker";
import styled from "styled-components";

const Div = styled.div`
  background-color: aliceblue;
  width: 99vw;
  height: 40vw;
`;

function Mycolor() {
  return (
    <Div>
      <DayPicker />
    </Div>
  );
}

export default Mycolor;
