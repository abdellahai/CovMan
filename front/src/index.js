import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <NavBar/>
    </Router>,
    document.getElementById("root")
);
