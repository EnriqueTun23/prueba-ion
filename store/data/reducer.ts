import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Info } from '../../interfaces/info.interface';
import { Person } from '../../interfaces/person.interface';

export interface InitialState {
    data: [];
    loading: boolean,
    error: {},
    person: {},
    info: Info,
}


export const initialState: InitialState = {
    data: [],
    info: {},
    loading: false,
    error: {},
    person: {},
}


const kanyeReducer = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction) => {
            state.loading = true;
        },
        setData: (state, { payload }: PayloadAction<[]>) => {
            state.loading = false;
            state.data = payload
        },
        setInfo: (state, { payload }: PayloadAction<Info>) => {
            state.info = payload
        },
        setPerson: (state, { payload }: PayloadAction<Person>) => {
            state.person = payload
        }  
    },
})
export default kanyeReducer
