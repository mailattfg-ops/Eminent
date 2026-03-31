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
    0: "/Images/dental_consultation.webp",
    1: "/Images/teeth_cleaning.webp",
    2: "/Images/composite_fillings.webp",
    3: "/Images/surgical_extraction.webp",
    4: "/Images/wisdom_tooth.webp",
    5: "/Images/after_smile.webp",
    6: "/Images/clear_aligners.webp",
    7: "/Images/dental_replacement.webp",
    8: "/Images/gum_treatment.webp",
    9: "/Images/frenectomy.webp",
    10: "/Images/pediatric_care.webp",
    11: "/Images/sensitivity_relief.webp",
};

export default function ServicesPageContent() {
    return (
        <div className="min-h-screen bg-brand-cream selection:bg-brand-gold/20">
            <Navbar />

            <PageHero
                title="Our Treatments"
                subtitle="Comprehensive dental care for the whole family — from routine check-ups to advanced cosmetic procedures."
                backgroundImage="/Images/modern_dental.webp"
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
