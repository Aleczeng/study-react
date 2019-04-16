import {ADD_REDUX_VALUE, CHANGE_INPUT_VALUE, DELETE_REDUX_VALUE} from "./actionTypes";

const defaultState = {
    items: [],
    show: true,
    inputValue: 'input value',
    reduxItems: [1, 2, 3]
};

export default (state = defaultState, action) => {
    let newState = state;
    switch (action.type) {
        case CHANGE_INPUT_VALUE: {
            newState.inputValue = action.value;
            return newState;
        }
        case ADD_REDUX_VALUE: {
            newState.reduxItems.splice(0, 0, action.value);
            newState.inputValue = '';
            return newState;
        }
        case DELETE_REDUX_VALUE: {
            newState.reduxItems.splice(action.value, 1);
            return newState;
        }
        default:
            return state;
    }
}
