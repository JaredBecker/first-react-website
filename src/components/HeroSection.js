import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/world.mp4" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <p>This is new?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn-outline"
                    buttonSize="btn-large">GET STARTED</Button>
                <Button
                    className="btns"
                    buttonStyle="btn-primary"
                    buttonSize="btn-large">
                    WATCH TRAILER
                    <i className="fas fa-play-circle"></i>
                </Button>
            </div>
        </div >
    )
}

export default HeroSection
