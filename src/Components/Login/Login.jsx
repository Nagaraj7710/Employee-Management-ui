import React, { useState } from "react"
import "./login.css"
import axios from "axios";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:5000/users/signin", {
                userName,
                password
            })
            if (response.data.success) {
                localStorage.setItem("userName", userName);
                window.location.reload();
            } else {
                alert(response.data.message)
            }
        } catch (err) {
            alert(err?.response?.data?.message);
        }
    }

    return (
        <div className="login-container">
            <div className="login-popup">
                <h1>Login Page</h1>
                <form>
                    <input onChange={handleNameChange} value={userName} placeholder='Please enter user name' />
                    <input onChange={handlePasswordChange} value={password} placeholder='Please enter password' />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;