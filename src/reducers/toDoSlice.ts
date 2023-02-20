import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ToDo from '../interfaces/ToDo';
import type { RootState } from '../store';

interface toDoState {
  toDos: Array<ToDo>;
}

const initialState: toDoState = {
  toDos: [
    {
      id: 1,
      content: '스트레칭',
      deadlineHour: 6,
      deadlineMinute: 40,
      completed: false,
    },
    {
      id: 2,
      content: '운동',
      deadlineHour: 8,
      deadlineMinute: 20,
      completed: false,
    },
    {
      id: 3,
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
    completeToDo: (state, action: PayloadAction<Number>) => {
      const toDo = state.toDos.find(toDo => toDo.id === action.payload);
      if (toDo !== undefined) {
        toDo.completed = true;
      }
    },
  },
});

export const { addToDo, completeToDo } = toDoSlice.actions;
export const selectToDos = (state: RootState) => state.toDo.toDos;
export default toDoSlice.reducer;
