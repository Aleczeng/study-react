import React, {Component, Fragment} from 'react';
import './App.css';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";


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
                        <FormControl as="input" ref={(input) => {
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
                        {this.state.items.map((item, index) =>
                            <ListGroup.Item key={index}>{item}
                                <button className="btn btn-danger float-right"
                                        onClick={() => {
                                            this.onDeleteItem()
                                        }}>Delete
                                </button>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Container>
            </Fragment>
        );
    }

    addItem(myInputValue) {
        const items = [...this.state.items];
        items.push(myInputValue.value);
        this.setState({items});
        myInputValue.value = '';
    }


    onDeleteItem(index) {
        const items = [...this.state.items];
        items.splice(index, 1);
        this.setState({items})
    }
}

export default App;
