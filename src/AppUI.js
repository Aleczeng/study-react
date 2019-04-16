import React, {Component, Fragment} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import './App.css';

class AppUI extends Component {

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
                                    this.props.addItem(this.item)
                                }}>
                            Add item
                        </button>
                    </InputGroup>
                    <ListGroup>
                        {this.props.getItems()}
                    </ListGroup>
                    <p className={this.props.show ? 'show' : 'hide'}>This is an Animate</p>
                    <button className="btn btn-warning" onClick={() => {
                        this.props.handleToggle()
                    }}>Toggle
                    </button>
                </Container>

                <Container className="myReduxItem">
                    <h1 className="my-header">Redux study</h1>
                    <InputGroup className="mb-3">
                        <FormControl id="item" as="input" value={this.props.inputValue} onChange={this.props.handleInput}/>
                        <button className="btn btn-primary" onClick={this.props.addReduxItem}>Submit</button>
                    </InputGroup>
                    <ListGroup>
                        {this.props.getReduxItems()}
                    </ListGroup>
                </Container>
            </Fragment>
        );
    }
}

export default AppUI;
