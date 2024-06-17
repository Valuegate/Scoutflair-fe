import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/sections/AboutPage/Hero"
import AboutUs from "../components/sections/AboutPage/AboutUs"
import Testimonials from "../components/sections/AboutPage/Testimonials"
import Footer from "../components/Footer"
import Visionaries from "../components/sections/AboutPage/Visionaries"

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Testimonials />
            <Visionaries />
            <Footer />
        </div>
    )
}

export default AboutPage