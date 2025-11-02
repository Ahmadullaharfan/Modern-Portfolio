import React, { useState } from 'react';
import profileImage from '../assets/images/Profile.jpg';

function Hero() {
    const [isHired, setIsHired] = useState(false);

    const handleHireClick = () => {
        setIsHired(prevState => !prevState); // Toggle the state
    };

    return (
        <section id="home" className="min-h-screen flex items-center  text-gray-800 pt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-12 ml-2 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="gradient-text">Ahmadullah Arfan</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-500">
                        Full Stack Developer
                    </h2>
                    <p className="text-lg mb-8 text-slate-400 max-w-lg">
                        {isHired ? "Thank you for your interest! Feel free to reach out." : "I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together."}
                    </p>
                    <div className="flex space-x-4">
                        <button onClick={handleHireClick} className="px-6 py-3 rounded-full btn-primary  text-slate-100 font-medium">
                            {isHired ? 'Cancel' : 'Hire Me'}
                        </button>
                        <a href="#projects" className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition">View Work</a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
                        <img src={profileImage} alt="Profile" className="relative w-full h-full object-cover rounded-full border-4 border-slate-800" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;