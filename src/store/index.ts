import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import timeReducer from './reducers/timeSlice';
import toDoReducer from './reducers/toDoSlice';

const rootReducer = combineReducers({
  times: timeReducer,
  toDos: toDoReducer,
});
type rootReducerState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<rootReducerState> = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
