import { configureStore } from "@reduxjs/toolkit";
import api from "./api/apiSlice";
import studentReducer from "./features/student/studentSlice";
import userReducer from "./features/user/userSlice";
import enrollSlice from "./features/enroll/enrollSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    student: studentReducer,
    user: userReducer,
    enroll: enrollSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
