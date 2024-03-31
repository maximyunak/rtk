import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './redusers/UserSlice';
import { postApi } from '../servises/PostServise';

const rootReduser = combineReducers({
  userReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
