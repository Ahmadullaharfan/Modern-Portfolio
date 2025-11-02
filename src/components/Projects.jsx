import React from 'react';
import projectsData from '../projects.json';

function Projects() {
    // const projects = [
    //     {
    //         title: 'E-commerce Platform',
    //         description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
    //         image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    //         technologies: ['React', 'Node.js', 'MongoDB'],
    //     },
    //     {
    //         title: 'Task Management App',
    //         description: 'A productivity app for managing tasks with drag-and-drop functionality.',
    //         image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    //         technologies: ['React', 'Firebase', 'TailwindCSS'],
    //     },
    //     // Add more projects as needed
    // ];

    return (
        <section id="projects" className="py-20  text-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={project.id} className="project-card rounded-xl overflow-hidden card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4"> {project.technologies}
                                    {/* {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-700 rounded-full text-sm">{tech}</span>
                                    ))} */}
                                </div>
                                <div className="flex space-x-3">
                                    <a href="#" className="text-primary hover:text-secondary">
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                    <a href="#" className="text-primary hover:text-secondary">
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="px-8 py-3 rounded-full btn-primary font-medium inline-flex  text-slate-100 items-center">
                        View All Projects <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;