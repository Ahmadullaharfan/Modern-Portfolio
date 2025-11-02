import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="py-20  text-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="text-slate-400 mb-8">
                            Feel free to reach out for any questions or opportunities.
                            I'm always open to discussing new projects or ideas.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-slate-800 p-3 rounded-full mr-4">
                                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Location</h4>
                                    <p className="text-slate-400">Kabul Afghanistan</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-slate-800 p-3 rounded-full mr-4">
                                    <i className="fas fa-envelope text-primary text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Email</h4>
                                    <p className="text-slate-400">irfanahmadulla@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-slate-800 p-3 rounded-full mr-4">
                                    <i className="fas fa-phone-alt text-primary text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Phone</h4>
                                    <p className="text-slate-400">(+93)776432354</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="px-8 py-3 rounded-full btn-primary  text-slate-100 font-medium w-full">
                                Send Message <i className="fas fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;