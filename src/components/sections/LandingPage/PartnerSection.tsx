import React from "react";
import Partners from "../../../assets/Frame 1000002056.png"
import Binoculars from "../../../assets/Frame 1000002059.png"
import InfoMapIcon from "../../../assets/Frame 1000002062.png"
import DataAnalyticsIcon from "../../../assets/Frame 1000002060.png"
import TalentDevIcon from "../../../assets/Frame 1000002061.png"

const PartnerSection: React.FC = () => {
    return (
        <section className="w-screen bg-[#192B4D] xs:px-8 md:px-[120px] pt-10">
            <div className="flex flex-col gap-4">
                <p className="text-white">Our Partners</p>
                <img src={Partners} alt="" />
            </div>
            <div className="flex flex-col gap-10 pt-20">
                <div className="flex justify-center">
                    <h1 className="text-white text-3xl ">Our Services</h1>
                </div>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="flex xs:flex-col lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-[#4bbac1]"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>
                            <img className="w-32 h-16" src={Binoculars} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="self-stretch text-2xl font-semibold text-left text-white">
                                Advance Scouting
                            </p>
                            <p className="self-stretch opacity-[0.88] text-lg text-left text-white">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex xs:flex-col lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>
                            <img className="w-32 h-16" src={InfoMapIcon} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="self-stretch text-2xl font-semibold text-left text-black">
                                Talent Development
                            </p>
                            <p className="opacity-[0.88] text-lg text-left text-black">
                            Enhance player skills with our comprehensive talent development programs, focusing on personalized training and growth to maximize potential.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex xs:flex-col lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>
                            <img className="w-32 h-16" src={DataAnalyticsIcon} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="self-stretch text-2xl font-semibold text-left text-black">
                                Data Analytics
                            </p>
                            <p className="self-stretch opacity-[0.88] text-lg text-left text-black">
                            Unlock valuable insights with our data analytics tools, providing detailed performance metrics and actionable intelligence for informed decision-making.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex xs:flex-col lg:flex-row justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div>                           
                            <img className="w-32 h-16" src={TalentDevIcon} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="self-stretch text-2xl font-semibold text-left text-black">
                                Information Mapping
                            </p>
                            <p className="self-stretch opacity-[0.88] text-lg text-left text-black">
                            Visualize and organize complex data with our information mapping tools, making it easier to understand and interpret key insights, streamlining your decision-making process
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4">
                <img
                    src="pexels-photo-by-maciasu-x.png"
                    className="w-[351px] rotate-180 transform scale-x-[-1] opacity-[0.64] object-cover"
                />
                <img
                    src="pexels-photo-by-maciasu-x.png"
                    className="w-[351px] rotate-180 opacity-[0.64] object-cover"
                />
                <img
                    src="pexels-photo-by-maciasu-x.png"
                    className="w-[351px] rotate-180 transform scale-x-[-1] opacity-[0.64] object-cover"
                />
                <img
                    src="pexels-photo-by-maciasu-x.png"
                    className="w-[351px] rotate-180 opacity-[0.64] object-cover"
                />
            </div>
        </section>
    )
}

export default PartnerSection