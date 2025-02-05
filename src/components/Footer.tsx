// components/Footer.jsx
import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-4 bg-gray-800 text-center text-white">
            <p className="mb-2">
                © Gaurab Neupane, {currentYear}
            </p>
            <div className="flex justify-center gap-4">
                <a
                    href="https://github.com/GN-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                >
                    Github
                </a>
                <a
                    href="https://linkedin.com/in/gaurab-neupane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                >
                    Linkedin
                </a>
            </div>
        </footer>
    );
}
