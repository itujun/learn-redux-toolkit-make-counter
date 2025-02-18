import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from '../thunks/fetchTodos';
import { createTodo } from '../thunks/createTodo';
import { editTodo } from '../thunks/editTodo';
import { deleteTodo } from '../thunks/deleteTodo';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
  },
  extraReducers(builder) {
    // ? Jika fetchTodos berhasil
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      // * action.payload ialah hasil dari return response.data pada saat fetch api
      // * state ialah data yang da di initialState
      // * jadi state.data ialah data yg berada di initialState
    });

    // ? jika fetchTodos pending
    builder.addCase(fetchTodos.pending, (state, action) => {
      console.log('fetch/todos pending');
      // * pada studi kasus sesungguhnya, disini kita bisa memainkan logika isLoading atau memunculkan skeleton
    });

    // ? jika fetchTodos gagal
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log('fetch/todos error');
    });

    // * Create data, Edit data, Delete data
    builder
      .addCase(createTodo.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.data = state.data.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, ...action.payload };
          }
          return todo;
        });
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.data = state.data.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const todoReducer = todoSlice.reducer;
