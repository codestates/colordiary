import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../Home";
import MyColor from "../MyColor";
import MyPage from "../MyPage";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import MyWriting from "../MyWriting";

function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/mycolor">My Color</Link>
            </div>
            <div>
              <Link to="/mywriting">My Writing</Link>
            </div>
            <div>
              <Link to="/mypage">MyPage</Link>
            </div>
            <div>
              <Link to="/login">
                <button>login</button>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <button>signup</button>
              </Link>
            </div>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mycolor" element={<MyColor />} />
          <Route exact path="/mywriting" element={<MyWriting />} />
          <Route exact path="/mypage" element={<MyPage />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;
