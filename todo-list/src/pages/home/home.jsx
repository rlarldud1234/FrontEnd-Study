import React, { useState } from "react";
import "./home.css";
import InputBox from "../../components/input_box/input_box";
import TodoItemList from "../../components/todo_item_list/todo_item_list";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage_container">
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      <TodoItemList
        title={"할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />
      <TodoItemList
        title={"완료한 항목"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </div>
  );
};

export default Home;
