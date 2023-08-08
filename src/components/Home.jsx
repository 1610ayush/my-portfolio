import React from "react";
import Wave from "./Wave";
import { motion } from "framer-motion";
import {About, Description, Hide} from "../styles"
import { titleAnim, fade } from "../animation";


const Home = () => {
    return (
        <About>
            <Description>
                <motion.div>
                <Hide>
                    <motion.h2 variants={titleAnim}>Ayush Ranjan</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>
                    A <span>Developer</span>, maker and 
                    </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>problem solver.</motion.h2>
                </Hide>
                </motion.div>
                <motion.p variants={fade}>
                Crafting elegant web solutions with precision and passion. Available for transformative freelance projects.
                </motion.p>
            </Description>
            <Wave />
        </About>
    );
}

export default Home