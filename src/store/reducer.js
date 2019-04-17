import {ADD_REDUX_VALUE, CHANGE_INPUT_VALUE, DELETE_REDUX_VALUE, INIT_REDUX_ITEM} from "./actionTypes";

const defaultState = {
    items: [],
    show: true,
    inputValue: 'input value',
    inputReduxValue: 'input value',
    reduxItems: []
};

export default (state = defaultState, action) => {
    let newState = state;
    switch (action.type) {
        case CHANGE_INPUT_VALUE: {
            newState.inputReduxValue = action.value;
            return newState;
        }
        case ADD_REDUX_VALUE: {
            newState.reduxItems.splice(0, 0, action.value);
            newState.inputReduxValue = '';
            return newState;
        }
        case DELETE_REDUX_VALUE: {
            newState.reduxItems.splice(action.index, 1);
            return newState;
        }
        case INIT_REDUX_ITEM: {
            newState.reduxItems = action.data;
            return newState;
        }
        default:
            return state;
    }
}
