import React, { useState } from 'react';

import mypic from '../assets/Images/8888.JPG'

function About() {
    let aboutme = "I'm a passionate Full Stack Developer with over 5 years of experience creating modern web applications. I specialize in JavaScript ecosystems including React, and modern PHP and  CSS frameworks like Tailwaind CSS and Leraval";

    const [showfullaboutme, setFullAboutMe] = useState(false);

    const toggleAboutMe = () => {
        setFullAboutMe(!showfullaboutme);
    };

    if (!showfullaboutme) {
        aboutme = aboutme.substring(0, 90) + '...';
    }

    return (
        <section id="about" className="py-20  text-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
                            <img src={mypic} alt="About" className="relative w-full h-full object-contain rounded-2xl border-4 border-slate-800" />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-12">
                        <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
                        <p className="text-slate-400 mb-6">
                            {aboutme}
                        </p>
                        <button onClick={toggleAboutMe} className='text-indigo-500 mb-5 hover:text-indigo-600 cursor-pointer'>
                            {showfullaboutme ? 'Less' : 'More'}
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="font-semibold mb-2">Name: <span className="text-slate-500">Ahmadullah Arfan</span></h4>
                                <h4 className="font-semibold mb-2">Email: <span className="text-slate-500">irfanahmadullah@gmail.com</span></h4>
                                <h4 className="font-semibold mb-2">Phone: <span className="text-slate-500">(+93)776432354</span></h4>
                                <h4 className="font-semibold mb-2">WhatsApp: <span className="text-slate-500">(+93)730643470</span></h4>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Age: <span className="text-slate-500">24</span></h4>
                                <h4 className="font-semibold mb-2">Experience: <span className="text-slate-500">5+ Years</span></h4>
                                <h4 className="font-semibold mb-2">Location: <span className="text-slate-500">Kabul Afghanistan</span></h4>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full btn-primary font-medium  text-slate-100">Download CV</a>
                            <a href="#contact" className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;