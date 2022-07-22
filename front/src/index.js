import React from "react";
import ReactDOM from "react-dom";
import NavBar from './components/NavBar';
import HomeView from './views/Home';
import { BrowserRouter , Routes, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route  path='/' element={<HomeView/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
