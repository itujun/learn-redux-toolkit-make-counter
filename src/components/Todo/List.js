/** @format */

import React, { useEffect } from 'react';
import TodoItem from './Item';
import { fetchTodos } from '../../store/thunks/fetchTodos';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todos.data;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
