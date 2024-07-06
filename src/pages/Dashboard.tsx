import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/DashboardTopBar";
import UpcomingMatchBanner from "../components/sections/UpcomingMatchBanner";
import StandingsTable from "../components/StandingsTable";

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <SideBar />
            <div className="w-full flex flex-col">
                <TopBar />
                <div>
                    <div className="flex flex-col p-8 gap-8">
                        <UpcomingMatchBanner />
                        <StandingsTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard