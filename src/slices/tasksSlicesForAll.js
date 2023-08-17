import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [],
  selectedTask: {},
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      state.tasksList.push(task);
    },
    removeFromList: (state, action) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTaskInList: (state, action) => {
      state.tasksList = state.tasksList.map(
        (task) => task.id === action.payload.id ? action.payload : task
      );
    },
    setSelectedTask:(state,action) => {
    state.selectedTask = action.payload
    }
  },
});


export const{addTaskToList,removeFromList,updateTaskInList,setSelectedTask} =taskSlice.actions;

export default taskSlice.reducer