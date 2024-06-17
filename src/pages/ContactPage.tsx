import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/sections/ContactPage/Hero";
import ContactSection from "../components/sections/ContactPage/ContactSection";
import FaqSection from "../components/sections/LandingPage/FaqSection";

const ContactPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ContactHero />
            <ContactSection />
            <FaqSection />
            <Footer />
        </div>
    )
}

export default ContactPage