import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const editTodo = createAsyncThunk('todo/edit', async (todo) => {
  const response = await axios.put(
    `http://localhost:3001/todos/${todo.id}`,
    todo
  );
  return response.data;
});
