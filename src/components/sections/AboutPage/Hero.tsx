import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="px-[120px]">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div>
                        <p className="opacity-[0.96] text-[40px] font-bold text-left text-black py-24">
                            We are passionate about transforming the football industry through, innovative technology,
                            scouting, analytics and advance insights.
                        </p>
                    </div>
                    <div className="flex justify-start items-start gap-2.5">
                        <svg
                            width={80}
                            height={80}
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-[0.32]"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <circle opacity="0.32" cx={40} cy={40} r={40} fill="#615353" />
                        </svg>
                        <div className="flex justify-start items-start overflow-hidden gap-2.5 p-5 rounded-[68px] bg-[#192b4d]">
                            <svg
                                width={15}
                                height={18}
                                viewBox="0 0 15 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="pb-24">
                    <img className="rounded-2xl" src="./frame-36284.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero