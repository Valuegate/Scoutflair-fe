import React from "react";
import Partners from "../../../assets/Frame 1000002056.png"
import Binoculars from "../../../assets/Binoculars.svg"

const PartnerSection: React.FC = () => {
    return (
        <section className="w-screen bg-[#192B4D] px-[120px] pt-10">
            <div className="flex flex-col gap-4">
                <p className="text-white">Our Partners</p>
                <img src={Partners} alt="" />
            </div>
            <div className="flex flex-col gap-10 py-20">
                <div className="flex justify-center">
                    <h1 className="text-white text-3xl ">Our Services</h1>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div
                        className="flex justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-[#4bbac1]"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div
                            className="flex justify-start items-start relative overflow-hidden gap-2.5 p-2 rounded-lg bg-white border-[0.48px] border-black/[0.56]"
                            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.1)" }}
                        >
                            <img className="w-12 h-12" src={Binoculars} alt="" />
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
                        className="flex justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div
                            className="flex justify-start items-start relative overflow-hidden gap-2.5 p-2 rounded-lg bg-white border-[0.48px] border-black/[0.56]"
                            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.1)" }}
                        >
                            <img className="w-12 h-12" src={Binoculars} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="self-stretch text-2xl font-semibold text-left text-black">
                                Advance Scouting
                            </p>
                            <p className="opacity-[0.88] text-lg text-left text-black">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div
                            className="flex justify-start items-start overflow-hidden gap-2.5 p-2 rounded-lg bg-white border-[0.48px] border-black/[0.56]"
                            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.1)" }}
                        >
                            <img className="w-12 h-12" src={Binoculars} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="self-stretch text-2xl font-semibold text-left text-black">
                                Advance Scouting
                            </p>
                            <p className="self-stretch opacity-[0.88] text-lg text-left text-black">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex justify-start items-start gap-12 px-12 py-8 rounded-2xl bg-white"
                        style={{ boxShadow: "0px 8px 10px 0 rgba(0,0,0,0.14)" }}
                    >
                        <div
                            className="flex justify-start items-start relative overflow-hidden gap-2.5 p-2 rounded-lg bg-white border-[0.48px] border-black/[0.56]"
                            style={{ boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.1)" }}
                        >
                            <img className="w-12 h-12" src={Binoculars} alt="" />
                        </div>
                        <div className="flex flex-col justify-start items-start relative gap-2">
                            <p className="self-stretch text-2xl font-semibold text-left text-black">
                                Advance Scouting
                            </p>
                            <p className="self-stretch opacity-[0.88] text-lg text-left text-black">
                                Discover talent with precision using our advanced scouting tools, providing in-depth analysis
                                and insights to identify and evealuate top players
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerSection