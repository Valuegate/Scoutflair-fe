import React from "react";

const UpcomingMatchBanner: React.FC = () => {
    return (
        <div
            className="w-full h-60 relative overflow-hidden rounded-2xl bg-[url('upcoming-matches-banner.jpeg')] bg-cover bg-no-repeat bg-center"
            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.1)" }}
        >
            <div className="w-full h-full absolute left-0 top-0 overflow-hidden rounded-lg bg-[#041931]/90">
                <div className="flex flex-col justify-start items-start absolute left-4 md:left-7 top-14 gap-6">
                    <div className="flex flex-col justify-start items-start relative gap-2">
                        <p className="text-xl font-bold text-left text-white">
                            UPCOMING MATCH
                        </p>
                        <p className="text-lg text-left text-white">
                            <span className="font-light">Fri, 12 June, 2024</span>
                            <span className="mx-2">|</span>
                            <span className="font-medium">Uptown ScoutFlair League</span>
                        </p>
                    </div>
                    <div className="flex justify-end items-center gap-8">
                        <div className="flex items-center gap-3">
                            <p className="text-2xl font-semibold text-left text-white">
                                Deltas FC
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="dinamo-zagreb-1.png"
                                    className="w-6 h-6 object-cover"
                                    alt="Team Logo"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center px-2 rounded bg-black">
                            <p className="text-base font-medium text-left text-white">
                                17:00
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img
                                src="kashima-antlers-1.png"
                                className="w-6 h-6 object-cover"
                                alt="Team Logo"
                            />
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-2xl text-left text-white">Rhinos FC</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="unsplash_t8vre7qpm2m.png"
                    className="w-1/2 h-full absolute right-0 top-0 object-cover"
                    alt="Upcoming Match"
                />
            </div>
        </div>
    );
};

export default UpcomingMatchBanner;
