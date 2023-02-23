import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';

interface timeState {
  risingHour: number;
  risingMinute: number;
  progressDay: number;
}

const initialState: timeState = {
  risingHour: 6,
  risingMinute: 0,
  progressDay: 0,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    incrementProgressDay: state => {
      state.progressDay += 1;
    },
    initializeProgressDay: state => {
      state.progressDay = 0;
    },
  },
});

export const { incrementProgressDay, initializeProgressDay } =
  timeSlice.actions;
export const selectProgressDay = (state: RootState) => state.times.progressDay;
export const selectRisingHour = (state: RootState) => state.times.risingHour;
export const selectRisingMinute = (state: RootState) =>
  state.times.risingMinute;
export default timeSlice.reducer;
