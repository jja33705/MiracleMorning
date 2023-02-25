import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ToDo from '../../interfaces/ToDo';
import type { RootState } from '..';

interface toDoState {
  toDos: Array<ToDo>;
}

const initialState: toDoState = {
  toDos: [
    {
      content: '스트레칭',
      deadlineHour: 6,
      deadlineMinute: 40,
      completed: false,
    },
    {
      content: '운동',
      deadlineHour: 8,
      deadlineMinute: 20,
      completed: true,
    },
    {
      content: '독서',
      deadlineHour: 9,
      deadlineMinute: 0,
      completed: false,
    },
  ],
};

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<ToDo>) => {
      state.toDos = state.toDos.concat(action.payload);
    },
    completeToDo: (state, action: PayloadAction<number>) => {
      const toDo = state.toDos[action.payload];
      toDo.completed = !toDo.completed;
    },
  },
});

export const { addToDo, completeToDo } = toDoSlice.actions;
export const selectToDos = (state: RootState) => state.toDos.toDos;
export default toDoSlice.reducer;
