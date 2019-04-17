import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";
import axios from "axios";
import store from "./store/store";
import {addReduxValue, changeInputValue, deleteReduxValue, initReduxItem} from "./store/actionCreators";
import AppUI from "./AppUI";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    render() {
        return (
            <AppUI
                inputValue={this.state.inputValue}
                show={this.state.show}
                inputReduxValue={this.state.inputReduxValue}
                handleInput={this.handleInput}
                addItem={this.addItem}
                getItems={this.getItems}
                handleToggle={this.handleToggle}
                handleReduxInput={this.handleReduxInput}
                addReduxItem={this.addReduxItem}
                getReduxItems={this.getReduxItems}
            />
        );
    }

    componentDidMount() {
        axios.get('http://localhost.charlesproxy.com:8080/api/to-do-list',
            {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
            .then(resp => {
                console.log(resp);
                const items = resp.data;
                this.setState({items});

                const action = initReduxItem(items);
                store.dispatch(action);
            })
            .catch(error => console.log(error));

    };

    getItems = () => {
        return (
            this.state.items.map((item, index) =>
                <ToDoItem key={index} item={item} onDeleteItem={() => {
                    this.onDeleteItem(index)
                }}/>
            )
        )
    };

    handleInput = event => {
        const inputValue = event.target.value;
        console.log(inputValue);
        this.setState({inputValue});
    };

    addItem = () => {
        this.setState((prevState) => {
            const items = [...prevState.items];
            items.push(this.state.inputValue);
            const inputValue = '';
            return {items, inputValue};
        });
    };

    onDeleteItem = index => {
        this.setState((prevState) => {
            const items = [...prevState.items];
            items.splice(index, 1);
            return {items};
        })
    };

    handleToggle = () => {
        let show = this.state.show;
        show = !show;
        this.setState({show});
    };

    getReduxItems = () => {
        return (
            this.state.reduxItems.map((reduxItem, index) =>
                <ToDoItem key={index} item={reduxItem} onDeleteItem={() => {
                    this.onDeleteReduxItem(index)
                }}/>
            )
        )
    };

    handleReduxInput = event => {
        const action = changeInputValue(event.target.value);
        store.dispatch(action);
    };

    addReduxItem = () => {
        const action = addReduxValue(this.state.inputReduxValue);
        store.dispatch(action);
    };

    onDeleteReduxItem = index => {
        const action = deleteReduxValue(index);
        store.dispatch(action);
    }
}

export default App;
