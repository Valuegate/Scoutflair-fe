import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/DashboardTopBar";
import UpcomingMatchBanner from "../components/sections/UpcomingMatchBanner";
import StandingsTable from "../components/StandingsTable";
import ScoutCardSection from "../components/ScoutCardSection";
import LatestNewsCard from "../components/LatestNewsCard";
import TopScorerCard from "../components/TopScorersCard";
import { useAuthContext } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuthContext();

    // if (isLoggedIn()) {
    //     navigate("/login", { replace: true });
    //     // return null;
    // }

    return (
        <div className="flex">
            <SideBar />
            <div className="w-full flex flex-col">
                <TopBar />
                <div className="flex w-full">
                    <div className="flex flex-col p-8 gap-8 w-2/3 pr-0">
                        <UpcomingMatchBanner />
                        <StandingsTable />
                        <ScoutCardSection />
                    </div>
                    <div className="flex flex-col p-8 gap-8 w-1/3">
                        <LatestNewsCard />
                        <TopScorerCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
