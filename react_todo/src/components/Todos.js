// Convention for components is upper case name

import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

// Main component
class Todos extends Component {
    // The Todos component has a todos props that is passed down from the calling component (App in this case)
    // Populates 3 new TodoItem components based on the attributes of the elemtns in todos prop
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete} // Set TodoItem prop based on Todos prop
                delTodo={this.props.delTodo}
            />
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired, // Todos components must have an array passed down as a prop
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

export default Todos;
