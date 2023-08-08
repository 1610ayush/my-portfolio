import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [message, setMessage] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:ayushranjan.iit@gmail.com?body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="bg-gray-300 text-black py-16 h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto text-center px-6 lg:px-0">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <h2 className="text-4xl font-bold mb-2">Get in touch!</h2>
                    <p className="text-lg mb-8 text-black">Got a question or want to work together? Feel free to drop me a message.</p>
                </motion.div>
                <motion.form 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mx-auto w-full lg:w-2/3"
                    onSubmit={handleSend}
                >
                    <div className="mb-6">
                        <textarea 
                            placeholder="Your Message" 
                            className="w-full p-4 border rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline" 
                            rows="8"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-black text-white px-8 py-2 rounded-full transform hover:scale-105 transition-transform duration-300">Send</button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;
