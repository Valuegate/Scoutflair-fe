import React from "react";
import SideBar from "../../components/Dashboard/SideBar";
import TopBar from "../../components/Dashboard/DashboardTopBar";
import LatestNewsCard from "../../components/LatestNewsCard";
import TopScorerCard from "../../components/Dashboard/TopScorersCard";
import { useAuthContext } from "../../providers/AuthContext";
import { useNavigate } from "react-router-dom";
import AnalyticsCard from "../../components/AnalyticsCard";
import ResultsSection from "../../components/Dashboard/ResultSection";
import ResponsivePlayerPerformanceMetrics from "../../components/Dashboard/PerformanceMetrics";

const Analytics: React.FC = () => {
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
                        <AnalyticsCard />
                        <ResultsSection />
                        <ResponsivePlayerPerformanceMetrics />
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

export default Analytics;
