import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion, useAnimation, useInView } from 'framer-motion';
import profileImage from '../assets/images/Profile.jpg';

function Hero() {
    const [isHired, setIsHired] = useState(false);

    const reduceMotion = useReducedMotion();

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();

    const handleHireClick = () => {
        setIsHired(prevState => !prevState);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };


    const motionProps = reduceMotion ? { initial: false, animate: false } : { initial: 'hidden', animate: controls };

    useEffect(() => {
        if (reduceMotion) {
            controls.set('show');
            return;
        }
        if (inView) controls.start('show');
    }, [controls, inView, reduceMotion]);

    return (
        <motion.section
            ref={ref}
            {...motionProps}
            variants={containerVariants}
            id="home"
            className="min-h-screen flex items-center text-gray-800 pt-20"
            whileHover={reduceMotion ? {} : { scale: 1.001 }}
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className='bg-amber-500 w-1 h-50 ml-20 mr-5 '></div>

                <motion.div variants={itemVariants} className="md:w-1/2 mb-12 ml-2 md:mb-0">
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="gradient-text">Ahmadullah Arfan</span>
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-6 text-slate-500">
                        Full Stack Developer
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg mb-8 text-slate-400 max-w-lg">
                        {isHired
                            ? 'Thank you for your interest! Feel free to reach out.'
                            : "I build exceptional digital experiences that are fast, accessible, and visually appealing. Let's create something amazing together." // default message
                        }
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex space-x-4">
                        <motion.button
                            onClick={handleHireClick}
                            whileHover={reduceMotion ? {} : { y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
                            whileTap={reduceMotion ? {} : { scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="px-6 py-3 rounded-full btn-primary text-slate-100 font-medium"
                        >
                            {isHired ? 'Cancel' : 'Hire Me'}
                        </motion.button>

                        <motion.a
                            href="#projects"
                            whileHover={reduceMotion ? {} : { scale: 1.03 }}
                            className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
                        >
                            View Work
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
                    <motion.div
                        variants={itemVariants}
                        className="relative w-64 h-64"
                        whileHover={reduceMotion ? {} : { translateY: -6 }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-20" />
                        <motion.img
                            src={profileImage}
                            alt="Profile"
                            loading="eager"
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800"
                            whileHover={reduceMotion ? {} : { scale: 1.04, rotate: -1 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Hero;