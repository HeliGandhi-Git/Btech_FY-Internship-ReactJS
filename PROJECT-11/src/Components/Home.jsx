import React from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
    const name = localStorage.getItem('name');
    

    return (
        <>
            <Navbar />

            <div className="home-page">
                <div className="home-container">
                    <h1 className="home-title">
                        Welcome To Home Page, <span>{name}</span>
                    </h1>

                    <p className="home-subtitle">
                        You have successfully logged in to your Home.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
