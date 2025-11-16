import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, useReducedMotion, useAnimation, useInView } from 'framer-motion';
import mypic from '../assets/Images/8888.JPG';

/**
 * About component
 * - Uses Framer Motion with reduced-motion support
 * - Optimized rendering for repeated contact fields using map + variants
 */
function About() {
    // Full biography text (source of truth)
    const fullBio = `I'm a passionate Full Stack Developer with over 5 years of experience creating modern web applications. I specialize in JavaScript ecosystems including React, and modern PHP and CSS frameworks like Tailwind CSS and Laravel.`;

    // Local UI state: whether to show full bio
    const [showFullBio, setShowFullBio] = useState(false);

    // Toggle handler wrapped with useCallback to avoid re-creating the function on each render
    const toggleAbout = useCallback(() => setShowFullBio(prev => !prev), []);

    // Reduced motion preference for accessibility
    const reduceMotion = useReducedMotion();

    // Intersection + animation controls: animate when section enters viewport
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();

    // Derived (memoized) short bio used when collapsed
    const shortBio = useMemo(() => fullBio.substring(0, 90) + '...', [fullBio]);

    // Contact/details list — easier to maintain and render via map
    const details = useMemo(() => [
        { label: 'Name', value: 'Ahmadullah Arfan' },
        { label: 'Email', value: 'irfanahmadullah@gmail.com' },
        { label: 'Phone', value: '(+93)776432354' },
        { label: 'WhatsApp', value: '(+93)730643470' },
        { label: 'Age', value: '24' },
        { label: 'Experience', value: '5+ Years' },
        { label: 'Location', value: 'Kabul, Afghanistan' }
    ], []);

    // Motion variants
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };

    const slideIn = {
        hidden: { opacity: 0, x: 40 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    // If reduced motion is requested, we won't animate; otherwise animate when in view
    useEffect(() => {
        if (reduceMotion) {
            controls.set('show');
            return;
        }
        if (inView) controls.start('show');
    }, [controls, inView, reduceMotion]);

    return (
        <motion.section id="about" className="py-20 text-gray-800" ref={ref} initial="hidden" animate={controls} variants={container}>
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.h2 variants={slideIn} className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
                </div>

                {/* Main layout: image + content */}
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image column */}
                    <motion.div variants={slideIn} className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-20" aria-hidden="true" />
                            {/* Use loading="lazy" for images to improve LCP for other pages */}
                            <img src={mypic} alt="Ahmadullah Arfan" loading="lazy" className="relative w-full h-full object-contain rounded-2xl border-slate-800" />
                        </div>
                    </motion.div>

                    {/* Content column */}
                    <motion.div variants={slideIn} className="md:w-2/3 md:pl-12">
                        <motion.h3 variants={slideIn} className="text-2xl font-bold mb-6">Who am I?</motion.h3>

                        {/* Bio paragraph */}
                        <motion.p variants={slideIn} className="text-slate-400 mb-6">
                            {showFullBio ? fullBio : shortBio}
                        </motion.p>

                        {/* Toggle button */}
                        <motion.button variants={slideIn} onClick={toggleAbout} className="text-indigo-500 mb-5 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 rounded">
                            {showFullBio ? 'Less' : 'More'}
                        </motion.button>

                        {/* Details grid rendered from array to reduce repetition */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {details.map((d, i) => (
                                <motion.div key={d.label} variants={slideIn} custom={i}>
                                    <h4 className="font-semibold mb-2">{d.label}: <span className="text-slate-500">{d.value}</span></h4>
                                </motion.div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-4">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full btn-primary font-medium text-slate-100">Download CV</a>
                            <a href="#contact" className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition">Contact Me</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default React.memo(About);