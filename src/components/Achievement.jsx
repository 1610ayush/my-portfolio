import React from "react";
import { motion } from "framer-motion";

const Achievement = () => {
    const achievementsList = [
        "Secured 2nd prize twice in the Project-Based Learning event at college.",
        "Served as the Student Ambassador in college; played a pivotal role in organizing events and spearheaded the creation of the BMSIT Connect dashboard.",
        "Volunteered for the Pulse Polio Vaccination Camp, showcasing a commitment to community welfare."
    ];

    return (
        <section id="achievements" className="h-screen bg-#1b1b1b text-white py-16 flex items-center">
            <div className="container mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                    <h2 className="text-4xl font-bold mb-12 text-white">Achievements</h2>
                </motion.div>
                <ul className="list-none mx-auto text-left w-2/3 space-y-6">
                    {achievementsList.map((achievement, index) => (
                        <motion.li 
                            key={achievement}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.2 }}
                            className="p-6 bg-white text-black rounded-lg shadow-lg text-lg leading-relaxed"
                        >
                            {achievement}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Achievement;
