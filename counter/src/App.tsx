import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    count !== 0 ? setCount(count - 1) : window.alert("실패하셨습니다.");
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <main>
      <div>count : {count}</div>
      <button className="button" onClick={increase}>
        증가
      </button>
      <button className="button" onClick={decrease}>
        감소
      </button>
    </main>
  );
};

export default App;
