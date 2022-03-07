/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "나의 개발일지",
    "변경되는 값은 useState사용",
    "일단 해보자고",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let posts = "강남 고기 맛집";

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "나의 개발일기";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>3월 2일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>3월 11일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>3월 16일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
