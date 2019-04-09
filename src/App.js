import React, {Component, Fragment} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import ToDoItem from "./ToDoItem";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ['Study English', 'Study React']
        };
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <h1>To do list</h1>
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
                </Container>
            </Fragment>
        );
    }

    getItems() {
        return (
            this.state.items.map((item, index) =>
                <ToDoItem key={index} item={item} onDeleteItem={() => {
                    this.onDeleteItem(index)
                }}/>
            )
        )
    }

    addItem(myInputValue) {
        this.setState((prevState) => {
            const items = [...prevState.items];
            items.push(myInputValue.value);
            myInputValue.value = '';
            return {items};
        });
    }

    onDeleteItem(index) {
        this.setState((prevState) => {
            const items = [...prevState.items];
            items.splice(index, 1);
            return {items};
        })
    }
}

export default App;
