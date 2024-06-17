import React from "react";

const ContactHero: React.FC = () => {
    return (
        <div className="w-full h-[378px] relative overflow-hidden">
            <div className="w-full h-full absolute left-0 top-0 bg-[url('image.png')] bg-cover bg-no-repeat bg-center" />
            <div className="flex flex-col justify-start items-start w-full max-w-3xl absolute left-[10vw] top-[20vw] md:top-[10vw] gap-2.5 px-4 md:px-0">
                <div className="flex flex-col justify-start items-start w-full relative gap-1">
                    <p className="w-full text-[24px] md:text-[36px] lg:text-[40px] font-black text-left text-white">
                        Let's Chat, Get In Touch With Us Today!
                    </p>
                    <p className="w-full opacity-[0.92] text-base md:text-lg lg:text-xl font-medium text-left text-white">
                        Have questions or feedback? Our team is ready to assist you with any questions or support
                        you need. Send us a message, we will respond within 24 hours.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
