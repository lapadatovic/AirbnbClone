import React from "react";
import './Hero.css'

function Hero(){
    return(
        <section className="hero-section">
            <img className='hero-img' src='/Images/heroImg.png'></img>
            <h1 className='hero-header'>Online Experience</h1>
            <p className='hero-text'>Join unique interactive acitivies led by
                one of a kind hosts-all without leaving home.
            </p>
        </section>
    )
}

export default Hero