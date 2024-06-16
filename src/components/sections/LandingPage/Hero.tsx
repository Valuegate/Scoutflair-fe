import React from "react"
import goldlock from "../../../assets/goldlock.svg"

const Hero: React.FC = () => {
    return (
        <section className="Hero-section">
            <div className="flex flex-col justify-start items-start w-[513px] gap-[9.5px] py-52 px-[120px]">
                <div className="flex justify-start items-center relative gap-[3px]">
                    <p className="font-semibold text-lg text-left text-[#946108]">
                        Uncover Hidden Talent
                    </p>
                    <img className="w-5 h-5" src={goldlock} alt="" />
                </div>
                <div className="flex flex-col justify-start items-start self-stretch gap-[38px]">
                    <div className="flex flex-col justify-start items-start self-stretch relative gap-[9.501779556274414px]">
                        <p className="self-stretch w-[513px] text-[50.67615509033203px] font-bold text-left text-black">
                            Democratizing Football: Scouting Analytics, and Insights
                        </p>
                        <p className="self-stretch w-[513px] opacity-[0.96] text-[15.836297988891602px] text-left text-black">
                            Our solution democratizes football by providing elite-level scouting, comprehensive talent
                            development data, and cutting-edge information mapping tools to every club. This empowers
                            coaches and scouts to identify and nurture talent effectively, bridging the gap between
                            grassroots and professional football."
                        </p>
                    </div>
                    <div className="flex justify-start items-start gap-[44.341636657714844px]">
                        <div
                            className="flex justify-center items-center w-[148.86px] h-[38.01px] relative gap-[7.918148994445801px] px-[19.003559112548828px] py-[7.918148994445801px] rounded-[15.84px] bg-[#f2a725]"
                            style={{ boxShadow: "0px 16px 24px 2px rgba(0,0,0,0.14)" }}
                        >
                            <p className="text-[15.836297988891602px] font-bold text-left text-black">
                                Start free trial
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-[148.86px] h-[38.01px] relative gap-[7.918148994445801px] px-[19.003559112548828px] py-[7.918148994445801px] rounded-[15.84px] border-[0.57px] border-black/[0.88]">
                            <p className="text-[15.836297988891602px] text-left text-black">
                                Get in touch
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero