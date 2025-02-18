import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteTodo = createAsyncThunk('todo/delete', async (id) => {
  await axios.delete(`http://localhost:3001/todos/${id}`);
  return id;
});
