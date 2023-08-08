import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-#1b1b1b text-white py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center mb-4">
                    <a href="https://www.linkedin.com/in/ayush-ranjan-2767ba169/" target="_blank" rel="noopener noreferrer" className="text-xl mx-4 hover:text-gray-500">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/1610ayush" target="_blank" rel="noopener noreferrer" className="text-xl mx-4 hover:text-gray-500">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/AyushRa75273723" target="_blank" rel="noopener noreferrer" className="text-xl mx-4 hover:text-gray-500">
                        <FaTwitter />
                    </a>
                </div>
                <p className="text-sm">© 2023 Ayush Ranjan. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
