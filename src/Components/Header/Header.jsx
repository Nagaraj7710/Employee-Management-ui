import React from "react";
import "./header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const userName = localStorage.getItem("userName");
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    }
    const redirectToEmployeeList = () => {
        navigate("/employee-list");
    }
    const logOut = () => {
        navigate("/")
        localStorage.clear();
        window.location.reload()
    }

    return (
        <header className="header-container">
            <div className="left">
                <h1 className="option" onClick={redirectToHome}>Home</h1>
                <h1 className="option" onClick={redirectToEmployeeList}>Employee List</h1>
            </div>
            <div className="right">
                <h4>{userName}</h4>
                <button onClick={logOut}>Logout</button>
            </div>
        </header>
    )
}
export default Header;