import { configureStore } from "@reduxjs/toolkit";
import { UISlice, TasksSlice } from "./slices";

//Global store
export const store = configureStore({
  reducer: {
    UIStore: UISlice.reducer,
    TasksStore: TasksSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
