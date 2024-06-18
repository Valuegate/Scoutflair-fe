import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerSection from "../components/sections/LandingPage/PartnerSection";
import ServiceHero from "../components/sections/ServicesPage/ServiceHero";

const ServicePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <ServiceHero />
            <PartnerSection />
            <Footer />
        </div>
    )
}

export default ServicePage