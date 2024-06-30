import React from 'react';
import Scoutflairlogo from "../../../assets/Scoutflairlogo.svg"
import { Link } from 'react-router-dom';
import { Urls } from '../../../constants/constants';

const CoachIntro: React.FC = () => {
    return (
        <div className="w-full min-h-screen p-7 relative overflow-hidden bg-[#f8f8ff] flex flex-col justify-between">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-3 mb-10 lg:mb-0 lg:w-1/2 px-20">
                    <div className="flex items-center gap-4">
                        <Link to={Urls.HOME}><img className="w-7 h-7" src={Scoutflairlogo} alt="Scoutflair Logo" /></Link>
                        <p className="text-lg font-bold text-black">ScoutFlair</p>
                    </div>
                    <p className="text-sm font-semibold text-black opacity-90">
                        Get Started With Scoutflair To.....
                    </p>
                    <p className="text-2xl lg:text-3xl font-bold text-black">
                        Discover Talent with Real-Time Data &amp; Comprehensive Scouting Reports
                    </p>
                    <p className="text-lg lg:text-xl text-black opacity-80">
                        Track your progress, improve your skills, and reach your football dreams with <span className="font-bold">Scoutflair</span>
                    </p>
                    <div className="flex flex-row gap-7">
                        <div className="flex">
                            <div className="flex items-center border border-black rounded-l-lg bg-white px-8 py-2 cursor-pointer">
                                <p className="text-base font-semibold text-nowrap text-black">LEARN MORE</p>
                            </div>
                            <div className="flex items-center bg-[#041931] px-4 py-2 rounded-r-lg cursor-pointer">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10 18.9426L4.19469 13.1386L5.13736 12.1946L9.33336 16.3906L9.33336 1.33329L10.6667 1.33329L10.6667 16.3906L14.8614 12.1946L15.8054 13.1386L10 18.9426Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex items-center border border-black rounded-l-lg bg-white px-6 py-2 cursor-pointer">
                                <p className="text-base font-semibold text-nowrap text-black">START FREE TRIAL</p>
                            </div>
                            <div className="flex items-center bg-[#f00] px-4 py-2 rounded-r-lg cursor-pointer">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-white"
                                >
                                    <path
                                        d="M5.755 3.78085C5.67909 3.73584 5.59262 3.71173 5.50437 3.71096C5.41612 3.71019 5.32924 3.73279 5.25255 3.77646C5.17586 3.82014 5.1121 3.88333 5.06775 3.95963C5.02339 4.03592 5.00002 4.1226 5 4.21085V15.7892C5.00002 15.8774 5.02339 15.9641 5.06775 16.0404C5.1121 16.1167 5.17586 16.1799 5.25255 16.2236C5.32924 16.2672 5.41612 16.2898 5.50437 16.2891C5.59262 16.2883 5.67909 16.2642 5.755 16.2192L15.5242 10.43C15.5988 10.3857 15.6606 10.3228 15.7035 10.2474C15.7464 10.172 15.769 10.0868 15.769 10C15.769 9.91326 15.7464 9.828 15.7035 9.7526C15.6606 9.67721 15.5988 9.61429 15.5242 9.57002L5.755 3.78085Z"
                                        fill="white"
                                        stroke="white"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2 max-h-screen relative overflow-hidden rounded-2xl bg-[#041931]">
                    <Link to={Urls.COACHSIGNUP}>
                        <button
                            className="flex justify-center items-center absolute top-3 right-3 h-10 w-20 rounded-[10.66px] bg-[#f2a725]"
                            style={{ boxShadow: "0px 16px 24px 2px rgba(0,0,0,0.14)" }}
                        >
                            <p className="text-lg font-bold text-left text-black">Sign Up</p>
                        </button>
                    </Link>
                    <div className='flex h-fit overflow-hidden'>
                        <img
                            src="view-of-3d-businessman.png"
                            className="flex w-[733px] object-cover"
                        />;
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-10">
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 border border-black rounded">
                    <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                    >
                        <g clipPath="url(#clip0_169_44)">
                            <path
                                d="M13.7391 6.86946C13.7391 3.19559 10.7438 0.200195 7.06991 0.200195C3.39603 0.200195 0.400635 3.19559 0.400635 6.86946C0.400635 10.5433 3.39603 13.5387 7.06991 13.5387C10.7438 13.5387 13.7391 10.5433 13.7391 6.86946ZM7.06991 12.1195C4.01791 12.1195 1.62003 9.72161 1.62003 6.86946C1.62003 4.01731 4.01791 1.61943 7.06991 1.61943C10.1221 1.61943 12.52 4.01731 12.52 6.86946C12.52 9.72161 10.1221 12.1195 7.06991 12.1195ZM6.24377 9.67364L9.81529 6.10211L6.24377 2.53059L5.28601 3.48835L7.37376 5.5761L2.32471 5.5761L2.32471 6.62882L7.37376 6.62882L5.28601 8.71658L6.24377 9.67364Z"
                                fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_169_44">
                                <rect width={13.3385} height={13.3385} fill="white" transform="translate(0.400635 0.200195)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="text-sm font-medium text-black">Scoutflair © 2023</p>
                </div>
                <p className="opacity-90 text-sm font-medium text-black">
                    <span>© 2023 Scoutflair. All rights reserved.</span>
                </p>
            </div>
        </div>
    );
};

export default CoachIntro;
