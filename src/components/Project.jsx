import React from "react";
import { motion } from "framer-motion";
import blog from "../assets/blog.jpeg"
import insight from "../assets/insights.jpeg"
import ecomm from "../assets/ecomm.jpeg"
import vault from "../assets/vault.jpeg"
import lift from "../assets/lift.jpeg"
import game from "../assets/game.jpeg"
import music from "../assets/music.jpeg"
import crypto from "../assets/crypto.jpeg"
import meditate from "../assets/meditate.jpeg"
import files from "../assets/file-ops.jpeg"

const Project = () => {
    const projectList = [
        {
            title: "My-blog-app",
            imageUrl: blog,
            githubUrl: "https://github.com/1610ayush/Blog-app-backend",
            liveUrl: "https://blog-app-6859d.et.r.appspot.com/"
        },
        {
            title: "InsigtPal",
            imageUrl: insight,
            githubUrl: "https://github.com/1610ayush/InsightPal",
            liveUrl: "https://slack-sass.fly.dev/"
        },
        {
            title: "My-ecomm-store",
            imageUrl: ecomm,
            githubUrl: "https://github.com/1610ayush/my-ecomm-store",
            liveUrl: "https://my-ecomm-store-rose.vercel.app/"
        },
        {
            title: "S3FileVault",
            imageUrl: vault,
            githubUrl: "https://github.com/1610ayush/S3FileVault",
            liveUrl: "https://s3filevault.fly.dev/"
        },
        {
            title: "Lift-Simulation",
            imageUrl: lift,
            githubUrl: "https://github.com/1610ayush/Lift-Simulation",
            liveUrl: "https://lift-simulation-seven.vercel.app/"
        },
        {
            title: "Ignite",
            imageUrl: game,
            githubUrl: "https://github.com/1610ayush/Ignite",
            liveUrl: "https://1610ayush.github.io/Ignite/"
        },
        {
            title: "music-app",
            imageUrl: music,
            githubUrl: "https://github.com/1610ayush/music-app",
            liveUrl: "https://github.com/1610ayush/music-app"
        },
        {
            title: "crypto-app",
            imageUrl: crypto,
            githubUrl: "https://github.com/1610ayush/crypto-app",
            liveUrl: "https://grand-paletas-048ce0.netlify.app/"
        },
        {
            title: "Meditate",
            imageUrl: meditate,
            githubUrl: "https://github.com/1610ayush/Meditate",
            liveUrl: "https://1610ayush.github.io/Meditate/"
        },
        {
            title: "File-Ops",
            imageUrl: files,
            githubUrl: "https://github.com/1610ayush/File-ops",
            liveUrl: "https://github.com/1610ayush/File-ops"
        },
        
    ];

    return (
        <section id="projects" className="h-auto bg-#1b1b1b text-white py-16 flex items-center">
            <div className="container mx-auto text-center py-12">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>
                </motion.div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-8">
                        {projectList.map((project, index) => (
                            <motion.div 
                                key={project.title}
                                className="card relative"
                                style={{ height: '300px', width: '300px' }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                <img src={project.imageUrl} alt={project.title} className="rounded-t-lg h-full w-full object-cover"/>
                                <div className="p-4 absolute bottom-0 w-full bg-black bg-opacity-70">
                                    <h3 className="text-2xl mb-4">{project.title}</h3>
                                    <div className="flex justify-center space-x-4">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Live</a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
    
    
}

export default Project;
