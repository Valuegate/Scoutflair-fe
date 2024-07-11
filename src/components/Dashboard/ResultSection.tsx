import React from "react";
import ResultCard from "./ResultCard";

const ResultsSection: React.FC = () => {
    return (
        <div className="flex flex-col px-6 py-5">
            <div>
                <div>
                    <p>RECENT MATCH RESULTS</p>
                    <p>View More</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">        
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
                <ResultCard />
            </div>
        </div>
    )
}

export default ResultsSection