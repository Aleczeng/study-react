import {ADD_REDUX_VALUE, CHANGE_INPUT_VALUE, DELETE_REDUX_VALUE, INIT_REDUX_ITEM} from "./actionTypes";

export const changeInputValue = value => ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const addReduxValue = value => ({
    type:ADD_REDUX_VALUE,
    value
});

export const deleteReduxValue = index => ({
    type:DELETE_REDUX_VALUE,
    index
});

export const initReduxItem = data => ({
    type: INIT_REDUX_ITEM,
    data
});


