import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogsHero from "../components/sections/BlogsPage/BlogsHero";
import PopularBlogs from "../components/sections/BlogsPage/PopularBlogs";
import LatestNews from "../components/sections/BlogsPage/LatestNews";

const BlogsPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <BlogsHero />
            <PopularBlogs title="Popular Blogs" />
            <LatestNews title="Latest News" />
            <PopularBlogs title="Featured Blogs" />
            <LatestNews title="Editor's Picks" />
            <LatestNews title="Expert Reviews" />
            <Footer />
        </div>
    )
}

export default BlogsPage