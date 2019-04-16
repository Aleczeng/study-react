import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";
import axios from "axios";
import store from "./store/store";
import {addReduxValue, changeInputValue, deleteReduxValue} from "./store/actionCreators";
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
                addItem={this.addItem}
                getItems={this.getItems}
                handleToggle={this.handleToggle}
                handleInput={this.handleInput}
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
                this.setState({items})
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

    addItem = myInputValue => {
        this.setState((prevState) => {
            const items = [...prevState.items];
            items.push(myInputValue.value);
            myInputValue.value = '';
            return {items};
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

    handleInput = event => {
        const action = changeInputValue(event.target.value);
        store.dispatch(action);
    };

    addReduxItem = () => {
        const action = addReduxValue(this.state.inputValue);
        store.dispatch(action);
    };

    onDeleteReduxItem = index => {
        const action = deleteReduxValue(index);
        store.dispatch(action);
    }
}

export default App;
