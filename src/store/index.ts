import { configureStore } from '@reduxjs/toolkit';
import timeReducer from '../reducers/timeSlice';
import toDoReducer from '../reducers/toDoSlice';

const store = configureStore({
  reducer: {
    time: timeReducer,
    toDo: toDoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
