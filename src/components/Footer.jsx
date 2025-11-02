import React from 'react';

function Footer() {
    return (
        <footer className="bg-darker py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
                        <p className="text-slate-400 mt-2">© 2025 Ahmadullah Arfan. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        {['github', 'linkedin-in', 'twitter', 'dribbble'].map((icon, index) => (
                            <a key={index} href="#" className="text-slate-400 hover:text-primary transition">
                                <i className={`fab fa-${icon} text-xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
                    <p>Made with <i className="fas fa-heart text-red-500"></i> and lots of <i className="fas fa-coffee text-amber-500"></i></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;