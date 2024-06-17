import React, { useState } from "react";
import Logo from "../assets/Scoutflairlogo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Urls } from "../constants/constants";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full bg-[#192b4d] shadow-md">
            <div className="flex justify-between items-center px-6 py-4 md:px-12">
                <div className="flex items-center gap-4">
                    <img className="w-12 h-12" src={Logo} alt="Scoutflair Logo" />
                    <p className="text-2xl font-bold text-white">
                        Scout<span className="font-normal">Flair</span>
                    </p>
                </div>
                <div className="hidden md:flex gap-6">
                    <Link to={Urls.HOME} className="text-xl text-white">Home</Link>
                    <Link to={Urls.ABOUT} className="text-xl text-white">About</Link>
                    <a href="#services" className="text-xl text-white">Services</a>
                    <a href="#resources" className="text-xl text-white">Resources</a>
                    <a href="#blogs" className="text-xl text-white">Blogs</a>
                    <a href="#contact" className="text-xl text-white">Contact</a>
                </div>
                <div className="hidden md:flex">
                    <button className="px-4 py-2 bg-[#f2a725] text-black font-bold rounded-lg shadow-md">
                        Sign Up
                    </button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#192b4d] px-6 py-4">
                    <Link to={Urls.HOME} className="text-xl text-white">Home</Link>
                    <Link to={Urls.ABOUT} className="text-xl text-white">About</Link>
                    <a href="#services" className="block py-2 text-xl text-white">Services</a>
                    <a href="#resources" className="block py-2 text-xl text-white">Resources</a>
                    <a href="#blogs" className="block py-2 text-xl text-white">Blogs</a>
                    <a href="#contact" className="block py-2 text-xl text-white">Contact</a>
                    <button className="w-full mt-4 py-2 bg-[#f2a725] text-black font-bold rounded-lg shadow-md">
                        Sign Up
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
