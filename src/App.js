import React, {Component, Fragment} from 'react';
import './App.css';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";


class App extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            toDoItem: '',
            items: ['Study English', 'Study React']
        };
    }

    render() {
        return (


            <Fragment>
                <Container>
                    <h1>To do list</h1>

                    <InputGroup className="mb-3">
                        <FormControl value={this.state.toDoItem} onChange={this.handleInputValue.bind(this)}/>
                        <button className="btn btn-primary" onClick={this.addItem.bind(this, this.state.toDoItem)}>
                            Add item
                        </button>
                    </InputGroup>
                    <ListGroup>
                        {this.state.items.map((item, index) =>
                            <ListGroup.Item key={index}>{item}
                                <button className="btn btn-danger float-right"
                                        onClick={this.onDeleteItem.bind(this, index)}>Delete
                                </button>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Container>
            </Fragment>
        );
    }

    addItem() {
        this.setState({toDoItem: '', items: [...this.state.items, this.state.toDoItem]});
    }

    handleInputValue(event) {
        this.setState({toDoItem: event.target.value})
    }

    onDeleteItem(index) {
        const items = [...this.state.items];
        items.splice(index, 1);
        this.setState({items: items})
    }
}

export default App;
