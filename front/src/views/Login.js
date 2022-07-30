import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

const LoginView  = ()=>{
    return (
        <>
            <NavBar/>
            <div>
                <LoginForm/>
            </div>
        </>
    )
}
export default LoginView