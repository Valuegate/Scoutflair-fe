import React from "react";

const ResultCard: React.FC = () => {
    return (
        <div
            className="flex flex-col justify-start items-start relative gap-2 p-4 md:p-5 lg:p-6 rounded-lg bg-white border border-black/[0.56]"
            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.12), 0px 4px 8px 0 rgba(0,0,0,0.12)" }}
        >
            <p className="text-xs md:text-sm lg:text-base opacity-[0.92] text-left text-black">
                Matchday 17 of 34
            </p>
            <div className="flex flex-col justify-start items-center gap-4 py-2 md:py-3 lg:py-4">
                <div className="flex justify-start items-center gap-4 md:gap-6 lg:gap-8">
                    <div className="flex flex-col justify-start items-center relative gap-1">
                        <img src="club-américa-1.png" className="w-8 h-8 md:w-10 md:h-10 object-cover" alt="Jossh FC" />
                        <p className="text-sm md:text-base lg:text-lg font-medium text-left text-black">
                            Jossh FC
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-2 px-2 py-1 md:px-3 md:py-2 rounded bg-black">
                        <p className="text-base md:text-lg lg:text-xl font-medium text-left text-white">
                            2 - 4
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-center relative gap-1">
                        <img src="dinamarca-1.png" className="w-8 h-8 md:w-10 md:h-10 object-cover" alt="Drift SC" />
                        <p className="text-sm md:text-base lg:text-lg font-medium text-left text-black">
                            Drift SC
                        </p>
                    </div>
                </div>
                <div className="flex justify-start items-start gap-4 md:gap-6 lg:gap-8">
                    <div className="flex justify-start items-center gap-1">
                        <img className="w-6 h-6 md:w-8 md:h-8 object-cover" src="ellipse-2373.png" alt="Samuel Burke" />
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-[8px] md:text-xs lg:text-sm font-medium text-left text-black opacity-[0.88]">
                                Samuel Burke
                            </p>
                            <p className="text-[6px] md:text-xs lg:text-sm text-left text-black opacity-80">
                                Drift SC
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1 px-2 py-1 rounded bg-[#041931]">
                        <svg
                            width={12}
                            height={12}
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M4.5 0.141113L5.39806 2.90505H8.30423L5.95308 4.61325L6.85114 7.37718L4.5 5.66898L2.14886 7.37718L3.04692 4.61325L0.695774 2.90505H3.60194L4.5 0.141113Z"
                                fill="#F1D023"
                            />
                        </svg>
                        <p className="text-xs md:text-sm lg:text-base font-medium text-left text-white">
                            8.6
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard