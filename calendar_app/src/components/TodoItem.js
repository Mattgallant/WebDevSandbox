import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            fontSize: "2vh",
            margin: "1vh 10vw",
            borderRadius: "10px",
            color: "white",
            background: "#4dc0d1",
            paddingTop: "12px",
            paddingLeft: "20px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
    };

    render() {
        const { id, item } = this.props.todo; //Destructuring, pulling out ID and Title
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        style={{ marginRight: "10px" }}
                        // onChange={this.props.markComplete.bind(this, id)}
                    />
                    {item} {id}
                    <button
                        // onClick={this.props.delTodo.bind(this, id)}
                        style={btnStyle}
                    >
                        Delete
                    </button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    //todos: PropTypes.object.isRequired,
    // markComplete: PropTypes.func.isRequired,
    // delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    marginRight: "2vw",
};

export default TodoItem;
