import React from "react";
import NotificationIcon from "../assets/dashboard/notification.png";
import SettingIcon from "../assets/dashboard/settings.svg";

const TopBar: React.FC = () => {
    return (
        <div
            className="flex justify-between items-center w-full py-3 bg-white shadow-md"
            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.08), 0px 4px 8px 0 rgba(0,0,0,0.08)" }}
        >
            <p className="text-lg md:text-xl font-bold text-black ml-4 md:ml-6">
                Welcome, Team ScoutFlair
            </p>
            <input 
                className="mx-4 py-2 rounded-lg border p-4 border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Search"
            />
            <div className="flex items-center gap-4 mr-4 md:mr-6">
                <img className="w-5 h-5 md:w-6 md:h-6" src={NotificationIcon} alt="Notification" />
                <img className="w-5 h-5 md:w-6 md:h-6" src={SettingIcon} alt="Settings" />
            </div>
        </div>
    );
}

export default TopBar;
