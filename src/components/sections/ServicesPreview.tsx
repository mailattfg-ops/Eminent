"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";

export default function ServicesPreview() {
    return (
        <section className="py-6 md:py-8 lg:py-10 xl:py-12 bg-brand-cream">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader
                    badge="Our Treatments"
                    title="Expert"
                    highlightText="Dental Care"
                    subtitle="From routine check-ups to advanced cosmetic procedures — comprehensive dental solutions for the whole family."
                    centered={true}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 md:mt-10 lg:mt-12">
                    {services.slice(0, 3).map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            title={service.title}
                            description={service.description}
                            iconName={service.icon}
                            imageUrl={
                                index === 0 ? "/Images/dental_consultation.webp" :
                                    index === 1 ? "/Images/teeth_cleaning.webp" :
                                        index === 2 ? "/Images/cosmetic_dentistry.webp" : undefined
                            }
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center lg:px-10 lg:py-5 px-5 py-2.5 md:px-6 md:py-3 bg-brand-navy text-white text-xs md:text-base lg:text-lg xl:text-xl font-black rounded-[2rem] hover:bg-brand-gold transition-all shadow-xl hover:shadow-brand-gold/20 transform hover:-translate-y-1 group space-x-2 md:space-x-3"
                    >
                        <span>View All Treatments</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
