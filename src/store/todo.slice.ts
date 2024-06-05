import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export type TodoModel = {
  id: string;
  text: string;
};

export interface TodoState {
  tasks: TodoModel[];
}

const initialState: TodoState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newItem: TodoModel = {
        id: nanoid(),
        text: action.payload,
      };
      state.tasks.push(newItem);
    },
    removeTask: (state, action: PayloadAction<TodoModel["id"]>) => {
      const itemIndex = state.tasks.findIndex(
        (item) => item.id === action.payload
      );
      state.tasks.splice(itemIndex, 1);
    },
    editTask: (
      state,
      action: PayloadAction<{ id: TodoModel["id"]; newText: TodoModel["text"] }>
    ) => {
      const { id, newText } = action.payload;
      const itemIndex = state.tasks.findIndex((item) => item.id === id);
      state.tasks[itemIndex].text = newText;
    },
  },
});

export const { addTask, removeTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
