import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";

class ToDoItem extends Component {
    render() {
        return (
            <ListGroup.Item>{this.props.item}
                <button className="btn btn-danger float-right"
                        onClick={() => {
                            this.onDeleteItem()
                        }}>Delete
                </button>
            </ListGroup.Item>
        )
    }

    onDeleteItem() {
        this.props.onDeleteItem();
    }
}

export default ToDoItem;
