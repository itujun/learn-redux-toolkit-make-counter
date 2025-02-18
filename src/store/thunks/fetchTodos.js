import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * ! Usahakan pada paramenter async() hanya terdapat 1 parameter
 * ! karena jika lebih dari 1 parameter akan error (cek di console)
 * */
export const fetchTodos = createAsyncThunk('todos/fetch', async (todo) => {
  const response = await axios.get('http://localhost:3001/todos');
  return response.data;

  // * response.data diatas akan menjadi action.payload dari thunk
});
