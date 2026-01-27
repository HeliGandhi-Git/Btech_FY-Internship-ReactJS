import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './SignUp.css';

function SignUp() {
    const [name, setName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobileno, setMobileno] = React.useState('');
    const [password, setPassword] = React.useState('');

    const saveData = () => {
        let myformData = new FormData();
        myformData.append("st_name", name);
        myformData.append("st_gender", gender);
        myformData.append("st_email", email);
        myformData.append("st_mobileno", mobileno);
        myformData.append("st_password", password);

        axios.post("", myformData)
            .then((res) => {
                localStorage.setItem('name', name);
                if (res.data.flag == '1') {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="signup-page">
            <Navbar />

            <div className="signup-container">
                <h3 className="signup-title">Create Your Account</h3>

                <div className="signup-form">
                    <div className="form-group">
                        <label>Student Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <input
                            type="text"
                            placeholder="Enter Gender"
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            onChange={(e) => setMobileno(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="button"
                            value="Sign Up"
                            className="signup-btn"
                            onClick={saveData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
