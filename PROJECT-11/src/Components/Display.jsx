import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Display.css';

function Display() {
    const [data, setData] = React.useState([]);
    const TOKEN = localStorage.getItem('token');

    React.useEffect(() => {
        axios.get("", {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })
            .then(res => setData(res.data.student_list))
            .catch(err => console.log(err));
    });

    return (
        <div className="display-page">
            <Navbar />

            <div className="display-container">
                <h3 className="display-title">Student List</h3>

                <div className="table-wrapper">
                    <table className="student-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Mobile No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value) => {
                                    return (
                                        <tr key={value.st_id}>
                                            <td>{value.st_id}</td>
                                            <td>{value.st_name}</td>
                                            <td>{value.st_gender}</td>
                                            <td>{value.st_email}</td>
                                            <td>{value.st_mobileno}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Display;
