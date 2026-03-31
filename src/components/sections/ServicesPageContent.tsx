"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import PageHero from "@/components/sections/PageHero";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

const serviceImages: Record<number, string> = {
    0: "/Images/dental_consultation.png",
    1: "/Images/teeth_cleaning.png",
    2: "/Images/composite_fillings.png",
    3: "/Images/surgical_extraction.png",
    4: "/Images/wisdom_tooth.png",
    5: "/Images/after_smile.png",
    6: "/Images/clear_aligners.png",
    7: "/Images/dental_replacement.png",
    8: "/Images/gum_treatment.png",
    9: "/Images/frenectomy.png",
    10: "/Images/pediatric_care.png",
    11: "/Images/sensitivity_relief.png",
};

export default function ServicesPageContent() {
    return (
        <div className="min-h-screen bg-brand-cream selection:bg-brand-gold/20">
            <Navbar />

            <PageHero
                title="Our Treatments"
                subtitle="Comprehensive dental care for the whole family — from routine check-ups to advanced cosmetic procedures."
                backgroundImage="/Images/modern_dental.png"
            />

            {/* Services Grid */}
            <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden bg-brand-cream">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionHeader
                        badge="Our Expertise"
                        title="Specialized Dental"
                        highlightText="Care"
                        subtitle="Every treatment delivered with precision, clinical excellence, and a commitment to your lasting oral health."
                        centered={true}
                    />
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                                className="scroll-mt-32"
                            >
                                <ServiceCard
                                    index={index}
                                    title={service.title}
                                    description={service.description}
                                    iconName={service.icon}
                                    imageUrl={serviceImages[index] || undefined}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ConsultationCTA />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
