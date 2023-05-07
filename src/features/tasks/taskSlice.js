import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task description",
    completed: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "task description",
    completed: false,
  },
  {
    id: "3",
    title: "task 3",
    description: "task description",
    completed: false,
  },
  {
    id: "4",
    title: "task 4",
    description: "task description",
    completed: false,
  },
  {
    id: "5",
    title: "task 5",
    description: "task description",
    completed: false,
  },
  {
    id: "6",
    title: "task 6",
    description: "task description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskToDelete = state.find(task => task.id = action.payload.id);
      if (taskToDelete) {
        state.splice(state.indexOf(taskToDelete), 1);
      }
    }
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
