import React from "react";

const BlogsHero: React.FC = () => {
    return (
        <div className="w-full h-[378px] relative overflow-hidden">
            <div className="w-full h-full absolute left-0 top-0 bg-[url('image.png')] bg-cover bg-no-repeat bg-center" />
            <div className="flex flex-col justify-start items-start w-full max-w-3xl absolute left-[10vw] top-[20vw] md:top-[10vw] gap-2.5 px-4 md:px-0">
                <div className="flex flex-col justify-start items-start w-full relative gap-1">
                    <p className="w-full text-[24px] md:text-[36px] lg:text-[40px] font-black text-left text-white">
                        Latest News and Blogs
                    </p>
                    <p className="w-full opacity-[0.92] text-base md:text-lg lg:text-xl font-medium text-left text-white">
                        Stay up-to-date with the latest news and expert insights. Dive into blog for in-depth articles, trending topics, and fresh perspectives on the ever-evolving worl of football and technology
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogsHero;
