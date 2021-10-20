import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: { value: initialStateValue },
  reducers: {
    addTodo: (state, action) => {
      state.value = action.payload;
    },
    toggleStatus: (state, action) => {
      state.value.filter((items) => {
        if (items.id === action.payload) {
          items.done = !items.done;
        }
      });
    },
    resetTodoList: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { addTodo, toggleStatus, resetTodoList } = todoSlice.actions;

export default todoSlice.reducer;
