import { AppThunk } from '../store';
import kanyeReducer from './reducer';


export const dis = kanyeReducer.actions;

export const getData = (url: string): AppThunk => async (dispatch,getState) => {

    try {
        dispatch(dis.setLoading())
        const response = await fetch(url);
        const res = await response.json();
        const { data } = getState().todo;
        const d = [...data, ...res.results]
        dispatch(dis.setData(d))
        dispatch(dis.setInfo(res.info))
    } catch (error) {
        console.error(error)
    } finally {
        console.log('finalizo')
    }
};

export const getDataInfo = (id: number) => (dispatch,getState) => {
    const { data } = getState().todo;

    const found = data.find(element => element.id === id);
    dispatch(dis.setPerson(found))
}