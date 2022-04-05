import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(3);

  const handleClick = (event) => {
    console.log("hello click")
    setCurrentPage(Number(event.target.id));
  };

  //   const { todos, currentPage, todosPerPage } = this.state;

  // Logic for displaying current todos
  const indexOfLastTodo = currentPage * todosPerPage;
console.log("indexOfLast",indexOfLastTodo)
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  console.log("indexOffirst",indexOfFirstTodo)
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  console.log("currentTodos",currentTodos)
  const renderTodos = currentTodos.map((todo, index) => {
    console.log("renderTodos")
    return <li key={index}>{todo}</li>;
  });

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    console.log("renderNumber")
    return (
      
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <div>
      <div>
        <ul>{renderTodos}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    </div>
  );
};

export default TodoApp;
