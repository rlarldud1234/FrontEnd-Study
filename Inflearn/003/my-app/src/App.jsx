import { Fragment } from "react";
import "./app.css";

function App() {
  const style = {
    h1Style: {
      border: "solid 1px black",
    },
    content: {
      color: "red",
    },
  };

  const name = "김기영";
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDay();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();

  return (
    <>
      <h1 style={style.h1Style}>Hello! {name}</h1>
      <p style={style.content}>반가워요!!</p>
      <div>
        <h1>{year} 년</h1>
        <h2>
          {month}월 {day}일
        </h2>
        <h2>
          {hour}시 {minute}분 {seconds}초
        </h2>
      </div>
    </>
  );
}

export default App;
