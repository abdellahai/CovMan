import React from "react";
import ReactDOM from "react-dom";
import HomeView from './views/Home';
import './styles/index.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import LoginView from "./views/Login";

ReactDOM.render(
    <BrowserRouter>
        
        <Routes>
            <Route  path='/' element={<HomeView/>}/>
            <Route  path='/login' element={<LoginView/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
