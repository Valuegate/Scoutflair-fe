import React, { useState } from "react";
import ActiveSideBarIcon from "./ActiveSideBarIcon"; // Make sure to import the icon component

const SideBar: React.FC = () => {
    const [activePath, setActivePath] = useState<string>("");

    const handleSetActive = (path: string) => {
        setActivePath(path);
    };

    const getActiveStyle = (path: string) => ({
        background: activePath === path 
            ? "linear-gradient(128.61deg, rgba(1,14,29,0.24) -10.42%, rgba(255,255,255,0.24) 140.66%)" 
            : "none",
        padding: "8px",
        borderRadius: "8px",
        position: "relative"
    });

    return (
        <div
            className="w-full md:w-[336px] min-h-max flex flex-col rounded-tr-3xl rounded-br-3xl bg-[#041931] shadow-lg"
        >
            <div className="flex items-center gap-4 p-6">
                <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g clipPath="url(#clip0_225_1342)">
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
                <div className="flex text-[32px] text-white font-bold">
                    <p>Scout</p>
                    <p className="font-normal">Flair</p>
                </div>
            </div>
            <div className="flex flex-col gap-6 px-6">
                <div className="opacity-[0.72] text-sm text-white">
                    <p>INSIGHTS</p>
                </div>
                <hr className="border-white border-opacity-56" />
                <div 
                    className="text-xl font-bold text-white relative"
                    style={getActiveStyle("Analytics")}
                    onClick={() => handleSetActive("Analytics")}
                >
                    <p>Analytics</p>
                    <div className="absolute -right-3 bottom-1/4">
                        {activePath === "Analytics" && <ActiveSideBarIcon />}
                    </div>                        
                </div>
                <hr className="border-white border-opacity-56" />
                <div className="opacity-[0.72] text-sm text-white">
                    <p>MAIN</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Players")}
                        onClick={() => handleSetActive("Players")}
                    >
                        <p>Players</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Players" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Tactics")}
                        onClick={() => handleSetActive("Tactics")}
                    >
                        <p>Tactics</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Tactics" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Matches")}
                        onClick={() => handleSetActive("Matches")}
                    >
                        <p>Matches</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Matches" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Local Pitches")}
                        onClick={() => handleSetActive("Local Pitches")}
                    >
                        <p>Local Pitches</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Local Pitches" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Academies")}
                        onClick={() => handleSetActive("Academies")}
                    >
                        <p>Academies</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Academies" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Football Clubs")}
                        onClick={() => handleSetActive("Football Clubs")}
                    >
                        <p>Football Clubs</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Football Clubs" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                </div>
                <hr className="border-white border-opacity-56" />
                <div className="opacity-[0.72] text-sm text-white">
                    <p>RESOURCES</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Messages")}
                        onClick={() => handleSetActive("Messages")}
                    >
                        <p>Messages</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Messages" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Notifications")}
                        onClick={() => handleSetActive("Notifications")}
                    >
                        <p>Notifications</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Notifications" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                    <div 
                        className="text-xl font-bold text-white relative"
                        style={getActiveStyle("Settings")}
                        onClick={() => handleSetActive("Settings")}
                    >
                        <p>Settings</p>
                        <div className="absolute -right-3 bottom-1/4">
                            {activePath === "Settings" && <ActiveSideBarIcon />}
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="mt-auto flex items-center gap-2 p-6">
                <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M12.5003 1.43359V12.7714H15.4998V1.43365L12.5003 1.43359ZM10.9407 3.93522C5.93031 5.28179 2.24219 9.85558 2.24219 15.291C2.24219 21.7846 7.5063 27.0488 14 27.0488C20.4936 27.0488 25.7578 21.7846 25.7578 15.291C25.7578 9.85558 22.0697 5.28179 17.0594 3.93527V6.69535C20.5922 7.95284 23.1215 11.3265 23.1215 15.291C23.1215 20.3286 19.0376 24.4125 14 24.4125C8.96235 24.4125 4.87845 20.3286 4.87845 15.2909C4.87845 11.3264 7.40775 7.95278 10.9407 6.69524V3.93522Z"
                        fill="white"
                    />
                </svg>
                <div className="text-xl font-bold text-white">
                    <p>Sign Out</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
