import React from "react";
import "./home.css"
import Header from "../Header/Header";

const Home = () => {

    return (
        <div>
            <Header></Header>
            <div className="home-container">
                <h1>Welcome Admin Panel</h1>
            </div>
        </div>
    )
}
export default Home;