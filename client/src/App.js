import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/NavBar/NavBar";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  

  return (
    
    <div>
      <Navbar />
      
    </div>
  );
}

export default App;
