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
        <section id="work" className="h-screen bg-gray-200 py-16 flex items-center"> {/* Added 'flex' and 'items-center' */}
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-black tracking-wider">Work Experience</h2>
                {workExperiences.map((work, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center mb-16"
                    >
                        <div className="w-2/3 p-4">
                            <div style={{backgroundColor: '#1b1b1b'}} className="p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <h3 className="font-bold text-2xl mb-3 text-white tracking-wide">{work.title}</h3>
                                <a href='https://www.linkedin.com/company/workduck-official/product/' target="_blank" className='text-xl text-gray-500 mb-2'>{work.company}</a>
                                <div className="border-b-2 border-gray-400 w-1/5 mx-auto my-3"></div>
                                <p className="text-sm text-gray-400 mb-4">{work.timeline}</p>
                                <ul className="list-disc list-inside pl-5 text-left mt-4">
                                    {work.work.map(item => (
                                        <li className="text-gray-300 mb-2 text-base leading-relaxed" key={item}>{item}</li>
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
