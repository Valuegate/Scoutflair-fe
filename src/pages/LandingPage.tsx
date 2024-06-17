import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/LandingPage/Hero";
import PartnerSection from "../components/sections/LandingPage/PartnerSection";
import Testimonials from "../components/sections/LandingPage/Testimonials";
import AboutUs from "../components/sections/LandingPage/AboutUs";
import BlogSection from "../components/sections/LandingPage/BlogSection";
import FaqSection from "../components/sections/LandingPage/FaqSection";
// import Sportualogo from "../assets/Sportualogo.svg"
// import maptivelogo from "../assets/maptivelogo.svg"
// import talentcomlogo from "../assets/talentcomlogo.svg"
// import testlogo from "../assets/test.svg"

const LandingPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <PartnerSection />
            <Testimonials />
            {/* <Testsection /> */}
            <AboutUs />
            <BlogSection />
            <FaqSection />
        </div>
    )
}

export default LandingPage