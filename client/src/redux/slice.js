import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../api/api";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload;
      state.todos.push({ id, text, completed: false });
    },
    toogleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = action.payload.completed;
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    setTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, toogleTodo, deleteTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;

export const getItems = () => async (dispatch) => {
  try {
    const items = await (await api.get()).data;
    dispatch(setTodos(items));
  } catch (error) {
    console.log(error);
  }
};

export const addItem = (text) => async (dispatch) => {
  try {
    const newItem = await axios.post("http://localhost:5000/api", {
      text,
      completed: false,
    });
    dispatch(addTodo(newItem.data));
  } catch (error) {
    console.log(error);
  }
};

export const toogleItem = (item) => async (dispatch) => {
  try {
    const updatedItem = await axios.post(
      `http://localhost:5000/api/${item.id}`,
      {
        ...item,
        completed: !item.completed,
      }
    );
    dispatch(toogleTodo(updatedItem.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (item) => async (dispatch) => {
  try {
    const deletedItem = await axios.post(
      "http://localhost:5000/api/delete",
      item
    );
    dispatch(deleteTodo(item));
  } catch (error) {
    console.log(error);
  }
};
