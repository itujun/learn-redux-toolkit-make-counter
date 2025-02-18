import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createTodo = createAsyncThunk('todo/create', async (todo) => {
  const response = await axios.post('http://localhost:3001/todos', todo);
  console.log('response data : ', response.data);
  return response.data;
});
