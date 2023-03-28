import { createSlice } from "@reduxjs/toolkit";

interface initialStateInt {
  openSidebar: boolean;
}

const initialState: initialStateInt = {
  openSidebar: false,
};

export const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    onToggleSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
  },
});

export const { onToggleSidebar } = UISlice.actions;
