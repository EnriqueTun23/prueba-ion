import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectQuote = (state: RootState) => state.todo


export const dataSelector = createSelector(
    selectQuote,
    state => state
)