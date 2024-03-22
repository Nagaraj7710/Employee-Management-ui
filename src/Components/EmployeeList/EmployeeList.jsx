import React, { useEffect, useState } from "react";
import "./employee-list.css"
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState([]);

    const getEmployeeData = async () => {
        const response = await axios.get("http://localhost:5000/users/employee-list")
        if (response.data.success) {
            setEmployeeData(response.data.data);
        }
    }
    useEffect(() => {
        getEmployeeData();
    }, []);

    const handleCreateEmployee = () => {
        navigate("/create-employee")
    }

    return (
        <div>
            <Header></Header>
            <div className="employee-list-container">
                <div className="top">
                    <span>Total Count:{employeeData.length}</span>
                    <button onClick={handleCreateEmployee}>Create Employee</button>
                </div>
                <div className="search-container">
                    <span>Search</span>
                    <input type="text" className="search" />
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Unique Id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Designation</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Create Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeeData.map((each, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            {
                                                each.image ?
                                                    <img className="employee-image" src={each.image}></img> :
                                                    "-"
                                            }
                                        </td>
                                        <td>{each.name}</td>
                                        <td>{each.email}</td>
                                        <td>{each.mobileNo}</td>
                                        <td>{each.designation}</td>
                                        <td>{each.gender}</td>
                                        <td>{each.course}</td>
                                        <td>{each.createdDate}</td>
                                        <td><span className="action">Edit</span> - <span className="action">Delete</span></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default EmployeeList;