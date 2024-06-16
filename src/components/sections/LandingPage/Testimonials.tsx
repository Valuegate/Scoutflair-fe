import React from "react";

const Testimonials: React.FC = () => {
    return (
        <div className="flex flex-col py-[56px] justify-center px-[120px]">
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-[#946108]">
                    TESTIMONIALS
                </p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold text-left text-black">
                        Real feedback, Real Results!
                    </p>
                    <p className="w-[641px] opacity-[0.92] text-lg text-center text-black">
                        Discover the impact of our services through authentic feedback from satisfied clients. Real
                        experienes, real improvemnts, real results.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 pt-28">
                <div className="flex flex-col text-center justify-center rounded-[32px] bg-slate-500 px-7 py-7">
                    <div className="flex justify-center">
                        <img className="w-12 h-12" src="" alt="" />
                    </div>
                    <div className="">
                        <p>
                            Chinedu Okonkwo
                        </p>
                        <p>
                            Abuja. Nigeria.
                        </p>
                        <p>
                            "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center justify-center rounded-[32px] bg-slate-500 px-7 py-7">
                    <div className="flex justify-center">
                        <img className="w-12 h-12" src="" alt="" />
                    </div>
                    <div className="">
                        <p>
                            Chinedu Okonkwo
                        </p>
                        <p>
                            Abuja. Nigeria.
                        </p>
                        <p>
                            "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center justify-center rounded-[32px] bg-slate-500 px-7 py-7">
                    <div className="flex justify-center">
                        <img className="w-12 h-12" src="" alt="" />
                    </div>
                    <div className="">
                        <p>
                            Chinedu Okonkwo
                        </p>
                        <p>
                            Abuja. Nigeria.
                        </p>
                        <p>
                            "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials