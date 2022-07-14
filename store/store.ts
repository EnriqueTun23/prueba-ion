import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

// https://www.merixstudio.com/blog/introduction-using-redux-toolkit-nextjs-and-typescript/

export const store = configureStore({
    reducer: {}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;