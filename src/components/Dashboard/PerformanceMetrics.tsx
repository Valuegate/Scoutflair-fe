import React from 'react';

interface PerformanceMetricsProps {
    playerName: string, 
    goals: number, 
    assists: number, 
    passAccuracy: number
}
const PerformanceMetrics: React.FC <PerformanceMetricsProps> = ({ playerName, goals, assists, passAccuracy }) => (
    <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-4">
            <p className="opacity-80 text-sm text-left text-black">{playerName}</p>
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center">
                    <p className="text-xs text-left text-black">Goals</p>
                    <p className="opacity-80 text-xs text-left text-black">{goals}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs text-left text-black">Assists</p>
                    <p className="opacity-80 text-xs text-left text-black">{assists}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs text-left text-black">Pass Accuracy</p>
                    <p className="opacity-80 text-xs text-left text-black">{passAccuracy}</p>
                </div>
            </div>
        </div>
        <svg
            width={348}
            height={1}
            viewBox="0 0 348 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
        >
            <line
                y1="0.76"
                x2={348}
                y2="0.76"
                stroke="black"
                strokeOpacity="0.56"
                strokeWidth="0.48"
            />
        </svg>
    </div>
);

const ResponsivePlayerPerformanceMetrics: React.FC = () => {
    return (
        <div
            className="flex flex-col justify-start items-center rounded-bl-2xl rounded-br-2xl bg-white"
            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.12)" }}
        >
            <div
                className="relative flex flex-col items-center w-full max-w-[374px] h-[120px] overflow-hidden bg-[url('./frame-1000001965.png')] bg-cover bg-no-repeat bg-center"
                style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.12))" }}
            >
                <div className="absolute inset-0 bg-[#041931]/[0.88] flex items-center pl-4">
                    <p className="text-xl font-bold text-left uppercase text-white">
                        Player Performance Metrics
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col justify-start items-start gap-4 px-3 pt-3 pb-4 rounded-bl-2xl rounded-br-2xl bg-white border-2 border-[#d1d1d1]"
                style={{ boxShadow: "0px 8px 10px 0 rgba(209,209,209,0.12)" }}
            >
                <PerformanceMetrics playerName="Player 6" goals={5} assists={5} passAccuracy={79} />
                <PerformanceMetrics playerName="Player 6" goals={5} assists={5} passAccuracy={79} />
                <PerformanceMetrics playerName="Player 6" goals={5} assists={5} passAccuracy={79} />
                <PerformanceMetrics playerName="Player 6" goals={5} assists={5} passAccuracy={79} />
                <PerformanceMetrics playerName="Player 6" goals={5} assists={5} passAccuracy={79} />
            </div>
        </div>
    );
};

export default ResponsivePlayerPerformanceMetrics;
