import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
//import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";

import "./App.css";
import axios from "axios";

// Main component
class App extends Component {
    state = {
        todos: [],
    };

    // Runs right after component mounts
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => this.setState({ todos: res.data }));
    }

    // Toggle complete. Edits the todos inside component state by mapping any todos (in state) w/ id = ID to opposite
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    // Delete Todo
    delTodo = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) =>
                this.setState({
                    todos: [
                        ...this.state.todos.filter((todo) => todo.id !== id),
                    ],
                })
            );
    };

    // Add a new Todo
    addTodo = (title) => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title,
                completed: false,
            })
            .then((res) =>
                this.setState({
                    todos: [...this.state.todos, res.data],
                })
            );
    };

    render() {
        //console.log(this.state.todos);
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        markComplete={this.markComplete} // Set Todos prop to markComplete method of App component
                                        delTodo={this.delTodo}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
