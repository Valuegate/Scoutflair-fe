import React from "react";

const BlogSection: React.FC = () => {
    return (
        <section className="Blog-section py-14">
            <div className="flex flex-col justify-start items-center relative gap-6">
                <p className="text-xl font-bold text-left text-[#946108]">BLOG</p>
                <div className="flex flex-col justify-start items-center relative gap-1">
                    <p className="text-[32px] font-bold text-left text-black">
                        Stay Informed, Stay Ahead!
                    </p>
                    <p className="w-[641px] opacity-[0.92] text-lg text-center text-black">
                        Stay informed with our latest news and blog updates and stay ahead of the game with
                        cutting-edge insights, tips, and trends that keep you ahead of the curve.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default BlogSection