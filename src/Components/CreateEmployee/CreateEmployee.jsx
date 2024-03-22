import React, { useState } from "react";
import "./create-employee.css"
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEmployee = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
        name: "",
        email: "",
        mobileNo: "",
        designation: "HR",
        gender: "",
        course: "",
        image: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name: state.name,
            email: state.email,
            image: state.image,
            mobileNo: state.mobileNo,
            designation: state.designation,
            gender: state.gender,
            course: state.course,
            createdDate: new Date()
        }

        try {
            const response = await axios.post("http://localhost:5000/users/add-employee", { employeeData: payload });
            if (response.data.success) {
                alert("Employee Added");
                navigate("/employee-list");
            } else {
                alert("Employee add failed");
            }
        } catch (err) {
            alert("Employee add failed");
        }
    }
    return (
        <div className="create-employee">
            <Header></Header>
            <h1 style={{ marginLeft: 50 }} className="title">Create Employee</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input required onChange={handleChange} name="name" type="text" placeholder="Please enter name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input required onChange={handleChange} name="email"  type="email" placeholder="Please enter email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input required onChange={handleChange} name="mobileNo" type="text" placeholder="Please enter mobile no" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="designation">Designation</label>
                        <select required onChange={handleChange} name="designation" >
                            <option value="HR">HR</option>
                            <option value="Manager">Manager</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="gender">Gender</label>
                        <div className="radio-btns">
                            <input required={!state.gender} onChange={handleChange} name="gender" type="radio" value="Male" />Male
                            <input required={!state.gender} onChange={handleChange} name="gender" type="radio" value="Female" />Female
                        </div>
                    </div>
                    <div className="form-control">
                        <label htmlFor="course">Course</label>
                        <div className="checkbox-grp">
                            <input required={!state.course} onChange={handleChange} checked={state.course === "MCA"} name="course" type="checkbox" value="MCA" />MCA
                            <input required={!state.course} onChange={handleChange} checked={state.course === "BCA"} name="course" type="checkbox" value="BCA" />BCA
                            <input required={!state.course} onChange={handleChange} checked={state.course === "BSC"} name="course" type="checkbox" value="BSC" />BSC
                        </div>
                    </div>
                    <div className="form-control">
                        <label htmlFor="image">Image</label>
                        <input required onChange={handleChange} accept="image/*" name="image" type="file" />
                    </div>
                    <button style={{ marginTop: 30 }}>Submit</button>
                </form>

            </div>
        </div>
    )
}
export default CreateEmployee;