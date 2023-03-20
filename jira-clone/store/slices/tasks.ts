import { Task } from "@/interfaces";
import { TasksApi } from "@/services";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface initialStateInt {
  tasks: Task[];
}

const initialState: initialStateInt = {
  tasks: [],
};

export const TasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },
  },
});

export const { setTasks } = TasksSlice.actions;
