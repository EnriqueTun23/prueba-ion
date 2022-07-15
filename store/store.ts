import { Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import kanyeReducer from './data/reducer';

// https://www.merixstudio.com/blog/introduction-using-redux-toolkit-nextjs-and-typescript/



export const store = configureStore({
    reducer: { todo: kanyeReducer.reducer }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;