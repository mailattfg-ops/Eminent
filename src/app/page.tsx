"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
// Removed Partnership import
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Facilities from "@/components/sections/Facilities";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <Hero />
            <WhyChooseUs />
            <Facilities />
            <ServicesPreview />
            <FAQ />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
