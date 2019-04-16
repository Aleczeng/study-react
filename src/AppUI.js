import React, {Fragment} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import './App.css';

const AppUI = (props) => {
    return (
        <Fragment>
            <Container>
                <h1 className="my-header">To do list</h1>
                <InputGroup className="mb-3">
                    <label htmlFor="item">Enter item</label>
                    <FormControl id="item" as="input" value={props.inputValue} onChange={props.handleInput}/>
                    <button className="btn btn-primary" onClick={props.addItem}>Add item</button>
                </InputGroup>
                <ListGroup>
                    {props.getItems()}
                </ListGroup>
                <p className={props.show ? 'show' : 'hide'}>This is an Animate</p>
                <button className="btn btn-warning" onClick={() => {
                    props.handleToggle()
                }}>Toggle
                </button>
            </Container>

            <Container className="myReduxItem">
                <h1 className="my-header">Redux study</h1>
                <InputGroup className="mb-3">
                    <FormControl as="input" value={props.inputReduxValue} onChange={props.handleReduxInput}/>
                    <button className="btn btn-primary" onClick={props.addReduxItem}>Submit</button>
                </InputGroup>
                <ListGroup>
                    {props.getReduxItems()}
                </ListGroup>
            </Container>
        </Fragment>
    );
};

export default AppUI;
