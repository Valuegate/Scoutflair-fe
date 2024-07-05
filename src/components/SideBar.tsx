import React from "react";

const SideBar: React.FC = () => {
    return (
        <div
            className="w-[336px] h-[1294px] relative overflow-hidden rounded-tr-3xl rounded-br-3xl bg-[#041931]"
            style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}
        >
            <div className="flex justify-start items-center w-[228px] h-12 absolute left-[54px] top-10 gap-4">
                <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g clip-path="url(#clip0_225_1342)">
                        <path
                            d="M24.6205 43.8747L4.13307 23.4182C-1.13811 18.1669 -1.13811 9.64175 4.13307 4.39042C9.40426 -0.870374 17.9367 -0.870374 23.2079 4.39042L43.6954 24.8375C48.9666 30.0983 48.9666 38.614 43.6954 43.8747C38.4242 49.1261 29.8917 49.1261 24.6205 43.8747Z"
                            fill="#083162"
                        />
                        <path
                            d="M3.55565 24.686L23.3605 44.4519C17.8523 49.3531 9.39567 49.1733 4.115 43.8936C-1.17514 38.6233 -1.36475 30.1834 3.55565 24.686Z"
                            fill="#F2A725"
                        />
                        <path
                            d="M44.4455 23.4084L24.6406 3.63311C30.1488 -1.26814 38.6055 -1.08836 43.8861 4.19136C49.1763 9.47107 49.3659 17.911 44.4455 23.4084Z"
                            fill="#F2A725"
                        />
                    </g>                    
                </svg>
                <p className="text-[32px] text-left text-white">
                    <span className="text-[32px] font-bold text-left text-white">
                        Scout
                    </span>
                    <span className="text-[32px] text-left text-white">Flair</span>
                </p>
            </div>
            <p className="absolute left-[54px] top-[135px] opacity-[0.72] text-sm text-left text-white">
                INSIGHTS
            </p>
            <svg
                width={336}
                height={1}
                viewBox="0 0 336 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-0.66px] top-[286.34px]"
                preserveAspectRatio="none"
            >
                <line
                    x1="-1.39876e-8"
                    y1="0.84"
                    x2={336}
                    y2="0.839971"
                    stroke="white"
                    stroke-opacity="0.56"
                    stroke-width="0.32"
                />
            </svg>
            <svg
                width={333}
                height={1}
                viewBox="0 0 333 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-3.66px] top-[694.34px]"
                preserveAspectRatio="none"
            >
                <line
                    x1={-3}
                    y1="0.84"
                    x2={333}
                    y2="0.839971"
                    stroke="white"
                    stroke-opacity="0.56"
                    stroke-width="0.32"
                />
            </svg>
            <svg
                width={336}
                height={1}
                viewBox="0 0 336 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-0.66px] top-[933.34px]"
                preserveAspectRatio="none"
            >
                <line
                    x1="-1.39876e-8"
                    y1="0.84"
                    x2={336}
                    y2="0.839971"
                    stroke="white"
                    stroke-opacity="0.56"
                    stroke-width="0.32"
                />
            </svg>
            <div className="flex flex-col justify-start items-start absolute left-[54px] top-[719px] gap-6">
                <p className="opacity-[0.72] text-sm text-left text-white">
                    RESOURCES
                </p>
                <div className="flex flex-col justify-start items-start opacity-[0.88] gap-6">
                    <div className="flex justify-start items-center relative gap-2">
                        
                        <p className="text-xl font-bold text-left text-white">Messages</p>
                    </div>
                    <div className="flex justify-start items-center relative gap-2">
                        
                        <p className="text-xl font-bold text-left text-white">
                            Notifications
                        </p>
                    </div>
                    <div className="flex justify-start items-center relative gap-2">
                        
                        <p className="text-xl font-bold text-left text-white">Settings</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center absolute left-[53px] top-[960px] opacity-[0.88] gap-2">
                <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 relative"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M12.5003 1.43359V12.7714H15.4998V1.43365L12.5003 1.43359ZM10.9407 3.93522C5.93031 5.28179 2.24219 9.85558 2.24219 15.291C2.24219 21.7846 7.5063 27.0488 14 27.0488C20.4936 27.0488 25.7578 21.7846 25.7578 15.291C25.7578 9.85558 22.0697 5.28179 17.0594 3.93527V6.69535C20.5922 7.95284 23.1215 11.3265 23.1215 15.291C23.1215 20.3286 19.0376 24.4125 14 24.4125C8.96235 24.4125 4.87845 20.3286 4.87845 15.2909C4.87845 11.3264 7.40775 7.95278 10.9407 6.69524V3.93522Z"
                        fill="white"
                    />
                </svg>
                <p className="text-xl font-bold text-left text-white">Sign Out</p>
            </div>
            <div className="flex justify-start items-center absolute left-[54px] top-[229px] opacity-[0.88] gap-3">
                
                <p className="text-xl font-bold text-left text-white">Analytics</p>
            </div>
            <div className="flex flex-col justify-start items-start absolute left-[53px] top-[311px] gap-6">
                <p className="opacity-[0.72] text-sm text-left text-white">MAIN</p>
                <div className="flex flex-col justify-start items-start opacity-[0.88] gap-6">
                    <div className="flex justify-start items-center relative gap-3">
                        
                        <p className="text-xl font-bold text-left text-white">Players</p>
                    </div>
                    <div className="flex justify-start items-center relative gap-3">
                        
                        <p className="text-xl font-bold text-left text-white">Tactics</p>
                    </div>
                    <div className="flex justify-start items-center relative gap-3">
                        
                        <p className="text-xl font-bold text-left text-white">Matches</p>
                    </div>
                    <div className="flex justify-start items-center relative gap-3">
                        
                        <p className="text-xl font-bold text-left text-white">
                            Local Pitches
                        </p>
                    </div>
                    <div className="flex justify-start items-center relative gap-3">
                        
                        <p className="text-xl font-bold text-left text-white">
                            Academies
                        </p>
                    </div>
                    <div className="flex justify-start items-center relative gap-3">
                        
                        <p className="text-xl font-bold text-left text-white">
                            Football Clubs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar