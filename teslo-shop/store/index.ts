import { configureStore } from "@reduxjs/toolkit";
import { CartSlice, UISlice } from "./slices";

//Global store
export const store = configureStore({
  reducer: {
    UIStore: UISlice.reducer,
    CartStore: CartSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
