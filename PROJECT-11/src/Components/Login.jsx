import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Login.css';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = () => {
        let myformData = new FormData();
        myformData.append("st_email", email);
        myformData.append("st_password", password);

        axios.post("", myformData)
            .then((res) => {
                if (res.data.flag == '1') {
                    localStorage.setItem('token', res.data.access_token);
                    localStorage.setItem('name', res.data.st_name);
                    localStorage.setItem('Id', res.data.st_id);
                    alert(res.data.message);
                    window.location.href = '/home';
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="login-page">
            <Navbar />

            <div className="login-container">
                <h3 className="login-title">Welcome Back</h3>

                <div className="login-form">
                    <div className="form-group">
                        <label>Student Email</label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <button className="login-btn" onClick={login}>
                            Login
                        </button>
                    </div>

                    {/* Forgot Password */}
                    <div className="forgot-password">
                        <span onClick={() => window.location.href = '/forgotpassword'}>
                            Forgot Password?
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
