import React, {Component, Fragment} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import ToDoItem from "./ToDoItem";
import './App.css';
import axios from "axios";
import store from "./store/store";

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
            <Fragment>
                <Container>
                    <h1 className="my-header">To do list</h1>
                    <InputGroup className="mb-3">
                        <label htmlFor="item">Enter item</label>
                        <FormControl id="item" as="input" ref={(input) => {
                            this.item = input
                        }}/>
                        <button className="btn btn-primary"
                                onClick={() => {
                                    this.addItem(this.item)
                                }}>
                            Add item
                        </button>
                    </InputGroup>
                    <ListGroup>
                        {this.getItems()}
                    </ListGroup>
                    <p className={this.state.show ? 'show' : 'hide'}>This is an Animate</p>
                    <button className="btn btn-warning" onClick={() => {
                        this.handleToggle()
                    }}>Toggle
                    </button>
                </Container>

                <Container className="myReduxItem">
                    <h1 className="my-header">Redux study</h1>
                    <InputGroup className="mb-3">
                        <FormControl id="item" as="input" value={this.state.inputValue} onChange={this.handleInput}/>
                        <button className="btn btn-primary" onClick={this.addReduxItem}>Submit</button>
                    </InputGroup>
                    <ListGroup>
                        {this.state.reduxItems.map((reduxItem, index) => {
                            return <ListGroup.Item key={index}>{reduxItem}</ListGroup.Item>;
                        })}
                    </ListGroup>
                </Container>
            </Fragment>
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

    addItem(myInputValue) {
        this.setState((prevState) => {
            const items = [...prevState.items];
            items.push(myInputValue.value);
            myInputValue.value = '';
            return {items};
        });
    };

    onDeleteItem = (index) => {
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

    handleInput = event => {
        const action = {
            type: 'change_input_value',
            value: event.target.value
        };
        store.dispatch(action);
    };

    addReduxItem = () => {
        const action = {
            type: 'add_redux_item',
            value: this.state.inputValue
        };
        store.dispatch(action);
    }
}

export default App;
