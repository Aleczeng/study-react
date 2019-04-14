const defaultState = {
    items: [],
    show: true,
    inputValue: 'input value',
    reduxItems: [1, 2, 3]
};

export default (state = defaultState, action) => {
    let newState = state;
    switch (action.type) {
        case 'change_input_value': {
            newState.inputValue = action.value;
            return newState;
        }
        case 'add_redux_item': {
            newState.reduxItems.splice(0, 0, action.value);
            newState.inputValue = '';
            return newState;
        }
        default:
            return state;
    }
}
