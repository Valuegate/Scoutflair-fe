import React from "react";
import Logo from "../assets/Scoutflairlogo.svg"

const Navbar: React.FC = () => {
    return (
        <div
            className="flex justify-start items-start w-screen absolute left-0 top-0 gap-40 px-[120px] py-6 bg-[#192b4d]"
            style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
        >
            <div className="flex justify-start items-center w-[228px] h-12 relative gap-4">
                <img className="w-12 h-12" src={Logo} alt="" />
                <p className="opacity-80 text-[32px] text-left text-white">
                    <span className="opacity-80 text-[32px] font-bold text-left text-white">
                        Scout
                    </span>
                    <span className="opacity-80 text-[32px] text-left text-white">
                        Flair
                    </span>
                </p>
            </div>
            <div className="flex justify-start items-center flex-grow gap-8">
                <div className="flex flex-col justify-start items-center flex-grow gap-2.5">
                    <div className="flex flex-col justify-start items-center self-stretch gap-3">
                        <div className="flex justify-start items-start w-[628px] relative gap-6">
                            <div className="w-[65px] h-7 relative">
                                <p className="absolute left-0 top-0 text-2xl font-bold text-left text-white">Home</p>
                            </div>
                            <div className="w-[65px] h-7 relative">
                                <p className="absolute left-0 top-0 text-2xl text-left text-white">About</p>
                            </div>
                            <div className="w-[97px] h-7 relative">
                                <p className="absolute left-0 top-0 text-2xl text-left text-white">Services</p>
                            </div>
                            <div className="w-[114px] h-7 relative">
                                <p className="absolute left-0 top-0 text-2xl text-left text-white">Resources</p>
                            </div>
                            <div className="w-[65px] h-7 relative">
                                <p className="absolute left-0 top-0 text-2xl text-left text-white">Blogs</p>
                            </div>
                            <div className="w-[88px] h-7 relative">
                                <p className="absolute left-0 top-0 text-2xl text-left text-white">Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-start h-12 gap-4">
                    <div
                        className="flex justify-center items-center w-[136px] h-12 relative gap-2.5 px-6 py-2.5 rounded-[20px] bg-[#f2a725]"
                        style={{ boxShadow: "0px 16px 24px 2px rgba(0,0,0,0.14)" }}
                    >
                        <p className="text-xl font-bold text-left text-black">
                            Sign Up
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar