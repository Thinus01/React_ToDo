// import React, { Component } from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const display = (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
  return display;
};

export default TodosList;
