import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import Todos from "./components/Todos";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faCalendarAlt);

function App() {
    return (
        <Router>
            <div className="background">
                <div className="wrapper">
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/todo"
                        render={(props) => (
                            <div className="mt-5 mx-5">
                                <Todos />
                            </div>
                        )}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
