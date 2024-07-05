import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/Scoutflairlogo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Urls } from "../constants/constants";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (path: string) => {
        return location.pathname === path ? "text-xl xs:text-black md:text-white font-bold" : "text-xl xs:text-black md:text-white";
    };

    return (
        <div className="w-full xs:bg-inherit md:bg-[#192b4d] shadow-md">
            <div className="flex justify-between items-center px-6 py-4 md:px-12">
                <div className="flex items-center gap-4">
                    <img className="w-12 h-12" src={Logo} alt="Scoutflair Logo" />
                    <p className="text-2xl font-bold text-white">
                        Scout<span className="font-normal">Flair</span>
                    </p>
                </div>
                <div className="hidden md:flex gap-6">
                    <Link to={Urls.HOME} className={getLinkClass(Urls.HOME)}>Home</Link>
                    <Link to={Urls.ABOUT} className={getLinkClass(Urls.ABOUT)}>About</Link>
                    <Link to={Urls.SERVICES} className={getLinkClass(Urls.SERVICES)}>Services</Link>
                    <Link to={Urls.RESOURCES} className={getLinkClass(Urls.RESOURCES)}>Resources</Link>
                    <Link to={Urls.BLOGS} className={getLinkClass(Urls.BLOGS)}>Blogs</Link>
                    <Link to={Urls.CONTACT} className={getLinkClass(Urls.CONTACT)}>Contact</Link>
                </div>
                <div className="hidden md:flex gap-6">
                    <Link to={Urls.SIGNUP}>
                        <button className="px-4 py-2 bg-[#f2a725] text-black font-bold rounded-lg shadow-md">
                            Sign Up
                        </button>
                    </Link>
                    <Link to={Urls.LOGIN}>
                        <button className="px-4 py-2 bg-[#f2a725] text-black font-bold rounded-lg shadow-md">
                            Log In
                        </button>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-black">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden xs:bg-inherit md:bg-[#192b4d] px-6 py-4">
                    <Link to={Urls.HOME} className={getLinkClass(Urls.HOME) + " block"}>Home</Link>
                    <Link to={Urls.ABOUT} className={getLinkClass(Urls.ABOUT) + " block"}>About</Link>
                    <Link to={Urls.SERVICES} className={getLinkClass(Urls.SERVICES) + " block"}>Services</Link>
                    <Link to={Urls.RESOURCES} className={getLinkClass(Urls.RESOURCES) + " block"}>Resources</Link>
                    <Link to={Urls.BLOGS} className={getLinkClass(Urls.BLOGS) + " block"}>Blogs</Link>
                    <Link to={Urls.CONTACT} className={getLinkClass(Urls.CONTACT) + " block"}>Contact</Link>
                    <Link to={Urls.SIGNUP}>
                        <button className="w-full mt-4 py-2 bg-[#f2a725] text-black font-bold rounded-lg shadow-md">
                            Sign Up
                        </button>
                    </Link>
                    <Link to={Urls.LOGIN}>
                        <button className="w-full mt-4 py-2 bg-[#f2a725] text-black font-bold rounded-lg shadow-md">
                            Log in
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
