import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/DashboardTopBar";

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <SideBar />
            <div className="w-full">
                <TopBar />
            </div>
        </div>
    )
}

export default Dashboard