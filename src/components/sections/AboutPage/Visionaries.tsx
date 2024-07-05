import React from "react"

const Visionaries: React.FC = () => {
    return (
        <section id="visionaries" className="bg-[#192B4D] py-14 xs:px-8 md:px-[120px]">
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-white">
                    OUR VISIONARIES
                </p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold xs:text-center md:text-left text-white">
                        The Brains Behind Scoutflair
                    </p>
                    <p className="opacity-[0.92] text-lg text-center text-white">
                        Meet the brilliant minds driving Scoutflair’s success. Our team of experts combines innovation
                        and expertise to revolutionize scouting and analytics
                    </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 pt-20 gap-4">
                <div>
                    <img className="rounded-2xl" src="/frame-1000002098.jpeg" alt="" />
                </div>
                <div>
                    <img className="rounded-2xl" src="/frame-1000002099.jpeg" alt="" />
                </div>
                <div>
                    <img className="rounded-2xl" src="/frame-1000002100.jpeg" alt="" />
                </div>
                <div>
                    <img className="rounded-2xl" src="/frame-1000002101.jpeg" alt="" />
                </div>                
            </div>
        </section>
    )
}

export default Visionaries