import React from 'react';

export default function Skills() {
    const technical = [
        { name: 'HTML/CSS/Tailwind CSS', description: 'Proficient in building responsive layouts and styles.', pct: 95 },
        { name: 'JavaScript', description: 'Strong understanding of ES6+ and asynchronous programming.', pct: 90 },
        { name: 'React', description: 'Experience with hooks, context API, and state management.', pct: 85 },
        { name: 'Laravel', description: 'Building server-side applications and RESTful APIs.', pct: 80 }
    ];

    const professional = [
        { name: 'Communication', description: 'Effective in conveying ideas and collaborating with teams.' },
        { name: 'Teamwork', description: 'Experience working in Agile environments and cross-functional teams.' },
        { name: 'Problem Solving', description: 'Strong analytical skills to troubleshoot and resolve issues.' },
        { name: 'Creativity', description: 'Innovative approach to design and functionality.' }
    ];

    return (
        <section id="skills" className="py-20 bg-white" aria-labelledby="skills-heading">
            <div className="container mx-auto px-6 skill-container">
                <h2 id="skills-heading" className="sr-only">Skills section</h2>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Technical Skills</h3>
                        <ul className="space-y-4">
                            {technical.map((skill, index) => (
                                <li key={index} className="bg-gray-100 card-hover rounded-lg p-4 shadow-md">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-gray-800">{skill.name}</span>
                                        <span className="text-sm text-gray-600">{skill.pct}%</span>
                                    </div>
                                    <p className="text-gray-600 mt-2">{skill.description}</p>
                                    <div className="mt-3">
                                        <div className="skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={skill.pct}>
                                            <div className="skill-progress" style={{ width: skill.pct + '%' }}></div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Professional Skills</h3>
                        <ul className="space-y-4">
                            {professional.map((skill, index) => (
                                <li key={index} className="bg-gray-100 rounded-lg p-4 card-hover shadow-md">
                                    <span className="font-medium text-gray-800">{skill.name}</span>
                                    <p className="text-gray-600 mt-2">{skill.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">Tools & <span className="gradient-text">Technologies</span></h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Laravel', 'MongoDB', 'MySQL', 'SQL Server', 'Git & GitHub', 'npm', 'Conva', 'Linux'].map((tool, index) => (
                            <div key={index} className="flex flex-col items-center card-hover p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <i className={'fab fa-' + tool.toLowerCase().replace(/\s+/g, '-') + ' text-4xl text-orange-500 mb-2'}></i>
                                <span className="text-gray-800">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
