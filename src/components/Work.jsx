import React from 'react';

const Work = () => {
    const workExperiences = [
        {
            title: "Growth Engineer Intern",
            company: "Workduck",
            work: [
                "Spearheaded the automation of Google Sheets using Google Apps Script, streamlining lead tracking and status updates.",
                "Implemented a dynamic timestamp system that records all lead interactions, allowing for efficient monitoring of progress and agent efficiency.",
                "Developed a comprehensive dashboard that automatically updates in real-time based on changes to lead statuses.",
                "Engineered custom prompts for diverse use cases in Langchain using Flowise's intuitive drag-and-drop interface.",
                "Successfully contributed to the improvement of the Framer website by incorporating captivating animations and search functionality."
            ],
            timeline: "June 2023 - Present"
        },
    ];

    return (
        <section id="work" className="h-auto md:h-screen bg-gray-200 py-8 md:py-16 flex flex-col justify-center"> 
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black tracking-wider">Work Experience</h2>
                {workExperiences.map((work, index) => (
                    <div 
                        key={index} 
                        className="mb-8 md:mb-16"
                    >
                        <div className="p-2 md:p-4">
                            <div style={{backgroundColor: '#1b1b1b'}} className="p-4 md:p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <h3 className="font-bold text-xl md:text-2xl mb-2 md:mb-3 text-white tracking-wide">{work.title}</h3>
                                <a href='https://www.linkedin.com/company/workduck-official/product/' target="_blank" rel="noopener noreferrer" className='text-lg text-gray-500 mb-1 md:mb-2'>{work.company}</a> {/* Added rel="noopener noreferrer" */}
                                <div className="border-b-2 border-gray-400 w-1/3 md:w-1/5 mx-auto my-2 md:my-3"></div>
                                <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-4">{work.timeline}</p>
                                <ul className="list-disc list-inside pl-4 md:pl-5 text-left mt-2 md:mt-4">
                                    {work.work.map(item => (
                                        <li className="text-gray-300 mb-1 md:mb-2 text-sm md:text-base leading-relaxed" key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;
