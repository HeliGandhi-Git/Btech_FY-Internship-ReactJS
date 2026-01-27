import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './ChangePassword.css';

function ChangePassword() {
    
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const id = localStorage.getItem('Id');

    const changePassword = () => {
        let myformData = new FormData();
        myformData.append("st_id", id);
        myformData.append("opass", oldPassword);
        myformData.append("npass", newPassword);
        myformData.append("cpass", confirmPassword);

        axios.post("", myformData)
            .then((res) => {
                if (res.data.flag == 1) {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="change-password-page">
            <Navbar />

            <div className="change-password-container">
                <h3 className="change-password-title">Change Password</h3>

                <div className="change-password-form">
                    <div className="form-group">
                        <label>Student ID</label>
                        <input
                            type="text"
                            value={id}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label>Old Password</label>
                        <input
                            type="text"
                            placeholder="Enter old password"
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>New Password</label>
                        <input
                            type="text"
                            placeholder="Enter new password"
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Enter confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <button className="change-password-btn" onClick={changePassword}>
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
