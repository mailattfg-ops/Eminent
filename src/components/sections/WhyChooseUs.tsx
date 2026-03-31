"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    HeartPulse,
    BadgeCheck,
    ArrowRight,
    Sparkles,
    CheckCircle2
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { companyDetails } from "@/data/company";
import SafeImage from "@/components/ui/SafeImage";

const mainFeatures = [
    {
        icon: ShieldCheck,
        title: "Advanced Sterilization",
        tagline: "100% Hygiene Guaranteed",
        desc: "We follow strict sterilization and hygiene protocols to ensure a completely safe environment for every patient.",
        points: ["Autoclave Sterilization", "Disposable Tools", "Clean Air Filtration"],
        image: "/Images/teeth_cleaning.png",
        delay: 0
    },
    {
        icon: HeartPulse,
        title: "Patient-First Care",
        tagline: "Comfort & Compassion",
        desc: "Our clinic is designed to be calm, welcoming, and stress-free — because we believe dental visits should never feel intimidating.",
        points: ["Pain-Free Techniques", "Sedation Options", "Follow-up Support"],
        image: "/Images/dental_consultation.png",
        delay: 0.2
    }
];

const smallFeatures = [
    {
        icon: Sparkles,
        title: "Modern Treatments",
        desc: "From clear aligners to cosmetic whitening, we use advanced technology.",
        delay: 0.4
    },
    {
        icon: BadgeCheck,
        title: "8+ Years Expertise",
        desc: "Led by Dr. Akhila Junoosha C.A (BDS), providing expert-level care.",
        delay: 0.5
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden bg-brand-cream">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Why Choose Us"
                    title="Patient Care Beyond"
                    highlightText="Expectations"
                    subtitle="At Eminent Dental Care, every treatment is delivered with precision, compassion, and a commitment to your long-term health."
                    centered
                />

                <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 space-y-12 md:space-y-24">
                    {mainFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${
                                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Feature Content */}
                            <div className="lg:w-1/2 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                                            <feature.icon size={24} />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold/60">{feature.tagline}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-serif text-brand-navy leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-brand-slate/60 text-lg font-medium leading-relaxed max-w-xl italic">
                                        "{feature.desc}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {feature.points.map((point, i) => (
                                        <div key={i} className="flex items-center gap-2 group/point">
                                            <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20 group-hover/point:bg-brand-gold group-hover/point:text-white group-hover/point:scale-110 transition-all duration-300">
                                                <CheckCircle2 size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-brand-navy font-bold text-sm tracking-wide">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <a
                                        href="/contact#contact"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-gold shadow-xl hover:shadow-brand-gold/20 transform hover:-translate-y-1 transition-all duration-500 group/btn"
                                    >
                                        <span>Consult Dr. Akhila</span>
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Feature Image/Visual */}
                            <div className="lg:w-1/2 w-full">
                                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-premium group">
                                    <SafeImage
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                                        fallbackIcon="shield"
                                    />
                                    {/* Gold Accent Frame */}
                                    <div className="absolute inset-4 border border-white/20 rounded-[2.5rem] pointer-events-none" />
                                    <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden md:block">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                            <span className="text-white font-black text-[10px] uppercase tracking-widest">Excellence in Care</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Smaller grid of supporting features */}
                <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {smallFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            className="p-10 rounded-[2.5rem] border-gold-hairline glass-card group hover:bg-brand-navy hover:border-transparent transition-all duration-700"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-white group-hover:scale-110 transition-all duration-700 shadow-lg group-hover:shadow-brand-gold/20">
                                    <feature.icon size={28} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-black font-serif text-brand-navy group-hover:text-white transition-colors duration-700 leading-[1.1]">
                                        {feature.title}
                                    </h4>
                                    <p className="text-brand-slate/60 font-medium text-sm md:text-base group-hover:text-white/70 transition-colors duration-700 italic">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
