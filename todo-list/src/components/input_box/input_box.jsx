import React, { useState, useRef } from "react";
import "./input_box.css";

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    const newTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deleted: false,
    });
    setTodoList(newTodoList);

    setText("");
    inputRef.current.focus();
  };

  return (
    <div className="todoapp_inputbox">
      <input
        type={"text"}
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요."
        className="todoapp_inputbox-inp"
        onChange={onChangeInput}
      />
      <button
        type="submit"
        className="todoapp_inputbox-add-btn"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </div>
  );
};

export default InputBox;
