import {ADD_REDUX_VALUE, CHANGE_INPUT_VALUE, DELETE_REDUX_VALUE, INIT_REDUX_ITEM} from "./actionTypes";
import axios from "axios";

export const changeInputValue = value => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const addReduxValue = value => ({
    type: ADD_REDUX_VALUE,
    value
});

export const deleteReduxValue = index => ({
    type: DELETE_REDUX_VALUE,
    index
});

export const initReduxItem = data => ({
    type: INIT_REDUX_ITEM,
    data
});

export const getReduxItems = () => {
    return (dispatch) => {
        axios.get('http://localhost.charlesproxy.com:8080/api/to-do-list',
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(resp => {
            const action = initReduxItem(resp.data);
            dispatch(action);
        })
    }
};


