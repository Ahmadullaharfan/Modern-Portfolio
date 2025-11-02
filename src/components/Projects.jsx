import React from 'react'
import projectsData from '../projects.json'

function Projects() {
    return (
        <section id="projects" className="py-20  text-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card rounded-xl overflow-hidden card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {Array.isArray(project.technologies) ? (
                                        project.technologies.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-200 rounded-full text-sm text-gray-800">{tech}</span>
                                        ))
                                    ) : (
                                        <span className="px-3 py-1 bg-slate-200 rounded-full text-sm text-gray-800">{project.technologies}</span>
                                    )}
                                </div>
                                <div className="flex space-x-3">
                                    <a href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                    <a href={project.repoLink || '#'} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
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
    )
}

export default Projects