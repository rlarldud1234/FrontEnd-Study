import React from "react";
import TodoItem from "../todo_item/todo_item";
import "./todo_item_list.css";

const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => {
  return (
    <div className="todoapp_list">
      <p className="todoapp_list-tit">{title}</p>
      <ul className="todoapp_list-ul">
        {todoList &&
          todoList.map((todoItem) => {
            if (todoItem.deleted) return null;
            return checkedList === todoItem.checked ? (
              <TodoItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ) : null;
          })}
      </ul>
    </div>
  );
};

export default TodoItemList;
