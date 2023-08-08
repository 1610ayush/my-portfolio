import React from "react";
import { motion } from "framer-motion";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import mongo from "../assets/mongodb.png";
import htmll from "../assets/html.png";
import csss from "../assets/css.png";
import s3 from "../assets/s3.png";
import node from "../assets/nodejs.png";
import reactt from "../assets/reactjs.png";
import express from "../assets/expressjs.png";
import tail from "../assets/tailwind.png";
import boot from "../assets/bootstrap.png";
import git from "../assets/git.png";
import ec2 from "../assets/ec2.png";
import postman from "../assets/postman.png";

const Skills = () => {
    const skills = [{
        "title": "Languages & Databases",
        "items": [
            { "icon": javascript, "title": "JavaScript" },
            { "icon": python, "title": "Python" },
            { "icon": mongo, "title": "MongoDB" },
            { "icon": htmll, "title": "HTML5" },
            { "icon": csss, "title": "CSS3" },
            { "icon": s3, "title": "AWS S3" }
        ]
    }, {
        "title": "Frameworks & Technologies",
        "items": [
            { "icon": node, "title": "NodeJS" },
            { "icon": reactt, "title": "React" },
            { "icon": express, "title": "ExpressJS" },
            { "icon": tail, "title": "TailwindCSS" },
            { "icon": boot, "title": "Bootstrap" }
        ]
    }, {
        "title": "Tools & Platforms",
        "items": [
            { "icon": ec2, "title": "AWS EC2" },
            { "icon": git, "title": "Git" },
            { "icon": postman, "title": "Postman" }
        ]
    }];

    return (
        <section id="skills" className="h-screen bg-gray-200 text-black py-16">
            <div className="container mx-auto text-center mb-8 py-12">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <h2 className="text-3xl font-bold">Skills</h2>
                </motion.div>
            </div>

            <div className="grid grid-rows-3 h-full gap-8">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="text-center">
                        <h3 className="text-2xl font-semibold mb-8 text-#23d997">{skillCategory.title}</h3>
                        <div className="flex justify-center flex-wrap gap-4">
                            {skillCategory.items.map((item, itemIndex) => (
                                <motion.div 
                                    key={item.title}
                                    className="flex flex-col items-center"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 + itemIndex * 0.05 }}
                                >
                                    <img src={item.icon} alt={item.title} className="w-16 h-16 mb-2" />
                                    <span className="text-md">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
