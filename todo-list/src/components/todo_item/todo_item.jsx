import React, { useEffect, useRef, useState } from "react";
import "./todo_item.css";

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);

  const editInputRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onChangeCheckBox = () => {
    const newTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(newTodoList);
    setEdited(false);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };

  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  const onClickSubmitButton = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? newText : item.text,
    }));

    setTodoList(nextTodoList);

    setEdited(false);
  };

  const onClickDeleteButton = () => {
    if (window.confirm("really delete?")) {
      const newTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));

      setTodoList(newTodoList);
    }
  };

  return (
    <li className="todoapp_item">
      <input
        type={"checkbox"}
        className={"todoapp_item-checkbox"}
        checked={todoItem.checked}
        onChange={onChangeCheckBox}
      />
      {edited ? (
        <input
          type={"text"}
          className={"todoapp_item-edit-input"}
          value={newText}
          ref={editInputRef}
          onChange={onChangeEditInput}
        />
      ) : (
        <span
          className={`todoapp_item-ctx ${
            todoItem.checked ? "todoapp_item-ctx-checked" : ""
          }`}
        >
          {todoItem.text}
        </span>
      )}
      {!todoItem.checked ? (
        edited ? (
          <button
            type="button"
            className="todoapp_item-edit-btn"
            onClick={onClickSubmitButton}
          >
            👌
          </button>
        ) : (
          <button
            type="button"
            className="todoapp_item-edit-btn"
            onClick={onClickEditButton}
          >
            ✏️
          </button>
        )
      ) : null}
      <button
        type="button"
        className="todoapp_item-delete-btn"
        onClick={onClickDeleteButton}
      >
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
