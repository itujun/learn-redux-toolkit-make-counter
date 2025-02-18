import axios from 'axios';

export const fetchTodosApi = async () => {
  const response = await axios.get('http://localhost:3001/todos');
  return response;
};

export const createTodoApi = async (newData) => {
  const response = await axios.post('http://localhost:3001/todos', newData);
  return response;
};

export const editTodoApi = async (id, newData) => {
  const response = await axios.put(
    `http://localhost:3001/todos/${id}`,
    newData
  );
  return response;
};

export const deleteTodoApi = async (id) => {
  await axios.delete(`http://localhost:3001/todos/${id}`);
};
