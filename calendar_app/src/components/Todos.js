import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
    state = {
        todos: [
            {
                item: "Take out trash",
                completed: false,
                id: 1,
            },
            {
                item: "Finish HW",
                completed: false,
                id: 2,
            },
            {
                item: "Walk Dog",
                completed: false,
                id: 3,
            },
        ],
    };

    render() {
        return this.state.todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                // markComplete={this.props.markComplete} // Set TodoItem prop based on Todos prop
                // delTodo={this.props.delTodo}
            />
        ));
    }
}

export default Todos;
