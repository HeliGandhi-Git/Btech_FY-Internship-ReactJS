import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './ForgotPassword.css';

function ForgotPassword() {
    const [email, setEmail] = React.useState('');

    const showPassword = () => {
        let myformdata = new FormData();
        myformdata.append("st_email", email);

        axios.post(
            "",
            myformdata
        )
        .then((res) => {
            if (res.data.flag == 1) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="forgot-page">
            <Navbar />

            <div className="forgot-container">
                <h2 className="forgot-title">Forgot Password</h2>
                <p className="forgot-subtitle">
                    Enter your registered email to retrieve your password
                </p>

                <div className="forgot-form">
                    <label>Student Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button className="forgot-btn" onClick={showPassword}>
                        Recover Password
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
