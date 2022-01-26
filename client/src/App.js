import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/NavBar/NavBar";
import MyColor from "./components/MyColor/Basic";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Navbar />
      <MyColor />
    </div>
  );
}

export default App;
