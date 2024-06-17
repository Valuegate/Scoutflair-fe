import React from "react";
import { FaqCardBlue, FaqCardWhite } from "../../FaqCards";

const FaqSection: React.FC = () => {
    return (
        <section id="Faq-section" className="bg-[#192B4D] py-14 px-[120px] gap-20">
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-white">F.A.Q</p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold text-left text-white">
                        Got Questions? We’ve Got Answers!
                    </p>
                    <p className="w-[641px] opacity-[0.92] text-lg text-center text-white">
                        Explore our FAQ section for clear and concise answers to all your inquires. From common
                        queries to detailed explanations, we’ve got you covered.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 pt-20">
                <FaqCardBlue />
                <FaqCardWhite />
                <FaqCardWhite />
                <FaqCardWhite />
                <FaqCardWhite />
                <FaqCardWhite />
                <FaqCardWhite />
                <FaqCardWhite />
            </div>
        </section>
    )
}

export default FaqSection