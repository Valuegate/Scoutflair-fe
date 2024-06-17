import React from "react";
import TestimonialCard from "../../TestimonialCard";

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
            <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-10 pt-28">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}

export default Testimonials