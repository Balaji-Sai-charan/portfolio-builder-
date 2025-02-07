import React from "react";
import DefaultLayout from "../components/DefaultLayout";

import '.././resources/Home.css'
import { Link } from 'react-router-dom';
function Home() {

    return (

        <>

            <DefaultLayout>
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Build Your</h1>
                        <h2>Professional Portfolio and Resume</h2>
                        <p>Create stunning Portfolios with our easy-to-use builder</p>
                        <Link to='/profile'>
                            <button>Get Started</button>
                        </Link>
                    </div>
                    <div className="hero-image">
                        <img src={"https://i.ibb.co/Txt611fP/vecteezy-portfolio-icon-for-your-website-mobile-presentation-and-20816485.jpg"} alt="Hero" />
                    </div>
                </div>
            </DefaultLayout>

        </>
    );
}

export default Home