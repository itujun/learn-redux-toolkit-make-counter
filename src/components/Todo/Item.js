/** @format */

import React from 'react';
import { GrClose } from 'react-icons/gr';
import { editTodo } from '../../store/thunks/editTodo';
import { deleteTodo } from '../../store/thunks/deleteTodo';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const editedTodo = { ...todo, completed: !todo.completed };
    dispatch(editTodo(editedTodo));
  };
  return (
    <li className={`todo-item ${todo.completed ? 'checked' : ''}`}>
      <div onClick={handleClick} className="todo-text">
        {todo.text}
      </div>
      <div
        className="todo-delete"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <GrClose />
      </div>
    </li>
  );
};

export default TodoItem;
