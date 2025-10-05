import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import de Link de react-router-dom
import logo from "../assets/logo.jpeg";
import menu from "../assets/menu.png";
import { X } from 'lucide-react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(() => {
        return window.location.hash || '#analysis';
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    const getLinkClasses = (href) => {
        const isActive = activeLink === href;
        let classes = "hover:text-white roboto transition pb-1 ";

        if (isActive) {
            classes += "font-bold text-white border-b-2 border-blue-400";
        } else {
            classes += "text-gray-300";
        }
        return classes;
    };

    const getMobileLinkClasses = (href) => {
        const isActive = activeLink === href;
        let classes = "block py-3 px-4 rounded-lg roboto transition hover:bg-gray-700/50 ";

        if (isActive) {
            classes += "font-bold text-white bg-blue-500/20 border-l-4 border-blue-400";
        } else {
            classes += "text-gray-300";
        }
        return classes;
    };

    return (
        <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm px-4 md:py-3 p-2 border-b border-blue-500/20 z-50">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Logo */}
                <div className="ml-0 text-xl flex justify-center items-center gap-2 orbitron text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 tracking-wider">
                    <img src={logo} alt="Logo" className="md:h-10 md:w-10 h-8 w-8 rounded-full" />  
                    <span className='md:flex hidden'>ExoPlanetAI</span>  
                </div>

                {/* Desktop Menu (hidden on mobile) */}
                <div className="hidden md:flex space-x-8 text-lg">
                    <Link to="/" className={getLinkClasses('/')} onClick={handleLinkClick}>
                        Analyze
                    </Link>
                    <Link to="/dashboard" className={getLinkClasses('/dashboard')} onClick={handleLinkClick}>
                        Performance
                    </Link>
                    <Link to="/about" className={getLinkClasses('/about')} onClick={handleLinkClick}>
                        About
                    </Link>
                </div>

                {/* Hamburger Menu Button (visible on mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-blue-400" />
                    ) : (
                        <img src={menu} alt="menu" className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 animate-fadeIn">
                    <div className="bg-gray-800/80 rounded-lg border border-blue-500/30 backdrop-blur-sm overflow-hidden">
                        <Link to="/" className={getMobileLinkClasses('/')} onClick={handleLinkClick}>
                            Analyze
                        </Link>
                        <Link to="/dashboard" className={getMobileLinkClasses('/dashboard')} onClick={handleLinkClick}>
                            Performance
                        </Link>
                        <Link to="/about" className={getMobileLinkClasses('/about')} onClick={handleLinkClick}>
                            About
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
