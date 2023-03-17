import { Task } from "@/interfaces";
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
    addTask: (state, { payload }) => {
      state.tasks = [
        ...state.tasks,
        {
          ...payload,
          _id: uuidv4(),
          createdAt: Date.now(),
        },
      ];
    },
    updateTask: (state, { payload }) => {
      console.log("Uploading...", payload);
      state.tasks = state.tasks.map((task) => {
        if (task._id === payload._id) {
          return {
            ...task,
            status: payload.status,
            description: payload.description,
          };
        } else {
          return task;
        }
      });
    },
  },
});

export const { addTask, updateTask } = TasksSlice.actions;
