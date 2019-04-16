import {ADD_REDUX_VALUE, CHANGE_INPUT_VALUE, DELETE_REDUX_VALUE} from "./actionTypes";

export const changeInputValue = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const addReduxValue = (value) => ({
    type:ADD_REDUX_VALUE,
    value
});

export const deleteReduxValue = (index) => ({
    type:DELETE_REDUX_VALUE,
    index
});


