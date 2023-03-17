import { Status } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateInt {
  openSidebar: boolean;
  isDragging: boolean;
  currentDragId: string | null;
}

const initialState: initialStateInt = {
  openSidebar: false,
  isDragging: false,
  currentDragId: null,
};

export const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    onToggleSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
    onDragging: (state, { payload }) => {
      state.isDragging = true;
      state.currentDragId = payload;
    },
    onStopDragging: (state) => {
      state.isDragging = false;
      state.currentDragId = null;
    },
  },
});

export const { onToggleSidebar, onDragging, onStopDragging } = UISlice.actions;
