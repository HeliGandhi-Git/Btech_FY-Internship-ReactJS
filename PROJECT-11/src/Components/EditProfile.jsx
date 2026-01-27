import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './EditProfile.css'

export default function EditProfile() {
    const id = localStorage.getItem('Id') || ''
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [mobileno, setMobileno] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('Id')

    if (!token || !userId) return

    axios.get('', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        console.log(res.data) // DEBUG PURPOSE

        const students = res.data.student_list || res.data.data || []

        const user = students.find(
            (student) => String(student.st_id) === String(userId)
        )

        if (user) {
            setName(user.st_name || '')
            setGender(user.st_gender?.toLowerCase() || '')
            setEmail(user.st_email || '')
            setMobileno(user.st_mobileno || '')
        }
    })
    .catch((error) => console.error(error))
}, [])


    const updateProfile = () => {
        const updateData = new FormData()
        updateData.append("st_id", id )
        updateData.append("st_name", name)
        updateData.append("st_gender", gender)
        updateData.append("st_email", email)
        updateData.append("st_mobileno", mobileno)

        axios.post("", updateData)
            .then((res) => {
                console.log(res)
                if (res.data.flag == '1') {
                    alert(res.data.message)
                    localStorage.setItem('name', name) 
                    navigate('/home')
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <Navbar />
            <div className="auth-wrapper">
                <div className="auth-card">
                    <h2 className="auth-title">Edit Profile</h2>

                    <div className="auth-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter full name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="auth-group">
                        <label>Phone Number</label>
                        <input 
                            type="text" 
                            placeholder="Enter phone number" 
                            value={mobileno} 
                            onChange={(e) => setMobileno(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="auth-group">
                        <label>Gender</label>
                        <select 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)}
                            required
                              >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="auth-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>

                    <button className="auth-btn" onClick={updateProfile}>Update Profile</button>
                </div>
            </div>
        </>
    )
}