import React from "react";
import InnovationImage from "../../../assets/Frame 1000002071.png"
import MissionImage from "../../../assets/Frame 1000002072.png"
import GoldButton from "../../GoldButton";

const AboutUs: React.FC = () => {
    return (
        <div className="flex flex-col text-center justify-center bg-[#192B4D] gap-32 py-14 px-[120px]">
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-white">ABOUT US</p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold text-left text-white">
                        Driven by Passion, Guided by Expertise
                    </p>
                    <p className="w-[762px] opacity-[0.92] text-lg text-center text-white">
                        At the heart of our company is a passion for sports and a commitment to excellence. Our expert
                        is dedicated to delivering innovative solutions that drives success.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-20">
                <div className="w-full flex flex-row gap-11">
                    <div className="w-[620px] h-[420px]">
                        <img src={InnovationImage} alt="" />
                    </div>
                    <div className="flex flex-col items-start gap-12 ml-auto">
                        <div className="flex flex-col justify-start items-start gap-12">
                            <div className="flex flex-col justify-start items-start w-[618px] relative gap-6">
                                <p className="opacity-[0.92] text-[26.622514724731445px] text-left uppercase text-white">
                                    MEET THE TEAM
                                </p>
                                <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
                                    <p className="self-stretch w-[618px] text-2xl font-bold text-left text-white">
                                        The Faces of Innovation
                                    </p>
                                    <p className="self-stretch w-[618px] opacity-80 text-[23.960262298583984px] text-left text-white">
                                        Discover the dedicated professionals fueling our success. Meet the innovative minds shaping
                                        our vision and revolutionizing scouting analytics for your success
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex justify-center items-center w-[188px] h-10 relative gap-2.5 px-6 py-2.5 rounded-[20px] bg-[#f2a725]"
                                style={{ boxShadow: "0px 16px 24px 2px rgba(0,0,0,0.14)" }}
                            >
                                <p className="text-base font-bold text-left text-black">Learn More</p>
                            </div>
                        </div>;
                    </div>
                </div>

                <div className="w-full flex flex-row">
                    <div className="flex flex-col justify-start items-start gap-12">
                        <div className="flex flex-col justify-start items-start w-[620px] relative gap-6">
                            <p className="opacity-[0.92] text-[24.78257179260254px] text-left uppercase text-white">
                                OUR MISSION
                            </p>
                            <div className="flex flex-col justify-start items-start self-stretch relative gap-2">
                                <p className="self-stretch w-[620px] text-2xl font-bold text-left text-white">
                                    Our Purpose, Your Success
                                </p>
                                <p className="self-stretch w-[620px] opacity-80 text-[22.30431365966797px] text-left text-white">
                                    At Scoutflair, our purpose is to elevate your scouting experience through cutting-edge
                                    analytics and personalized data gathering. We’re committed to providing tailored solutions
                                    that drive your success on and off the field.
                                </p>
                            </div>
                        </div>
                        <GoldButton text="Read More" />
                    </div>
                    <div className="w-[620px] h-[420px]">
                        <img src={MissionImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs