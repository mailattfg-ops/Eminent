"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails } from "@/data/company";
import { motion } from "framer-motion";
import { Target, Eye, Users, Heart, Award, GraduationCap, Star, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/common/SectionHeader";

export default function AboutPageContent() {
    return (
        <div className="min-h-screen bg-brand-cream selection:bg-brand-gold/20">
            <Navbar />

            <PageHero
                title="About Us"
                subtitle="Dedicated to creating healthy smiles and confident patients across Tanur and Malappuram."
                backgroundImage="/Images/about_clinical.png"
            />

            {/* Doctor Profile */}
            <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionHeader
                        badge="Meet The Founder"
                        title="Dr. Akhila"
                        highlightText="Junoosha C.A"
                        subtitle="BDS-qualified dental surgeon with 8+ years of experience in patient-centered dental care."
                        centered={true}
                    />
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <p className="text-brand-slate/70 leading-relaxed text-lg md:text-xl font-medium italic">
                                    "{companyDetails.doctorBio}"
                                </p>
                                <p className="text-brand-slate/60 leading-relaxed text-base md:text-lg font-medium">
                                    With a strong commitment to education and preventive dentistry, she aims to help patients achieve healthy and confident smiles through modern, evidence-based treatments and a compassionate approach.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { icon: GraduationCap, label: "Qualification", value: "BDS Dental Surgeon" },
                                    { icon: Clock, label: "Experience", value: "8+ Years Expert" },
                                    { icon: Users, label: "Patients", value: "1000+ Happy Smiles" },
                                    { icon: Star, label: "Services", value: "12+ Specialized" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 rounded-[2rem] bg-white shadow-premium border-gold-hairline transition-all duration-500 hover:-translate-y-1">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center shadow-lg text-brand-gold">
                                            <item.icon size={20} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mb-0.5">{item.label}</p>
                                            <p className="font-black text-brand-navy text-sm md:text-base leading-tight">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Premium Frame for Image - Using SafeImage for future-proofing */}
                            <div className="aspect-[4/5] rounded-[4rem] bg-brand-navy overflow-hidden shadow-premium relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-40 z-10" />
                                <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white z-20">
                                    <div className="space-y-6">
                                        <div className="w-24 h-24 rounded-full bg-brand-gold/20 border-2 border-brand-gold/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                                            <GraduationCap size={44} className="text-brand-gold" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl md:text-4xl font-black font-serif text-white">{companyDetails.doctorName}</h3>
                                            <p className="text-brand-gold font-bold text-sm tracking-widest uppercase">{companyDetails.doctorCredentials}</p>
                                        </div>
                                        <div className="h-px w-12 bg-brand-gold/40 mx-auto" />
                                        <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-black">Founder, Eminent Dental Care</p>
                                    </div>
                                </div>
                                
                                {/* Decorative border accent */}
                                <div className="absolute inset-6 border border-white/20 rounded-[3rem] pointer-events-none" />
                            </div>
                            
                            {/* Luxury floating accents */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About the Clinic */}
            <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden">
                {/* Subtle side background accent */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/2 -skew-x-12 translate-x-1/2 pointer-events-none" />
                
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionHeader
                        badge="Our Story"
                        title="About the"
                        highlightText="Clinic"
                        subtitle="Building trust through quality care, one smile at a time."
                        centered={true}
                    />
                    <div className="max-w-4xl mx-auto text-center mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        <div className="space-y-8 text-lg md:text-xl text-brand-slate/60 font-medium leading-relaxed italic">
                            <p>"{companyDetails.about}"</p>
                            <p className="not-italic text-brand-slate/70">
                                With individual attention and a calm atmosphere, we strive to make every dental visit safe, comfortable, and stress-free. Our clinic is equipped with modern dental technology, strictly maintained sterilization protocols, and a team genuinely committed to your oral health.
                            </p>
                            <p className="not-italic text-brand-slate/70">
                                We serve patients of all ages — from young children receiving their first dental check-up to adults seeking cosmetic or restorative treatments. At Eminent Dental Care, you are not just a patient, you are part of our family.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - High-Contrast Clinical Design */}
            <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden bg-brand-cream/30">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
                        
                        {/* Mission Card - Solid Navy Impact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-10 md:p-16 rounded-[3.5rem] bg-brand-navy shadow-2xl relative group overflow-hidden flex flex-col justify-between min-h-[480px]"
                        >
                            {/* Massive subtle background icon for depth */}
                            <div className="absolute bottom-[-15%] right-[-10%] opacity-5 text-white transform rotate-[-15deg] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                <Target size={350} strokeWidth={0.5} />
                            </div>
                            
                            <div className="relative z-10 space-y-10">
                                <div className="inline-flex items-center gap-3 bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20">
                                    <Target size={16} className="text-brand-gold" />
                                    <span className="text-brand-goldLight font-black text-[10px] uppercase tracking-[0.3em]">Our Mission</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-black font-serif text-white leading-tight">
                                        Empowering Thru <br />
                                        <span className="text-brand-gold italic">Clinical Excellence</span>
                                    </h2>
                                    <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium italic border-l-4 border-brand-gold/40 pl-8">
                                        "{companyDetails.mission}"
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-10">
                                <div className="h-0.5 w-16 bg-brand-gold/30 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Vision Card - Crisp White Clarity */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-10 md:p-16 rounded-[3.5rem] bg-white border border-brand-navy/5 shadow-2xl relative group overflow-hidden flex flex-col justify-between min-h-[480px]"
                        >
                            {/* Massive subtle background icon for depth */}
                            <div className="absolute bottom-[-15%] right-[-10%] opacity-[0.03] text-brand-navy transform rotate-[15deg] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                <Eye size={350} strokeWidth={0.5} />
                            </div>

                            <div className="relative z-10 space-y-10">
                                <div className="inline-flex items-center gap-3 bg-brand-navy/5 px-4 py-2 rounded-full border border-brand-navy/5">
                                    <Eye size={16} className="text-brand-navy/60" />
                                    <span className="text-brand-navy/60 font-black text-[10px] uppercase tracking-[0.3em]">Our Vision</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-black font-serif text-brand-navy leading-tight">
                                        Leading the Future of <br />
                                        <span className="text-brand-gold">Gentle Dentistry</span>
                                    </h2>
                                    <p className="text-brand-navy/60 leading-relaxed text-lg md:text-xl font-medium italic pr-4">
                                        "{companyDetails.vision}"
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-8 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[22, 23, 24].map(idx => (
                                            <div key={idx} className="w-10 h-10 rounded-full border-2 border-white bg-brand-cream overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${idx}`} alt="Patient" className="w-full h-full object-cover grayscale" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/40">1000+ Trusted Patients</p>
                                </div>
                                <div className="h-0.5 w-16 bg-brand-navy/10 rounded-full" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionHeader
                        badge="What We Stand For"
                        title="Our Core"
                        highlightText="Values"
                        subtitle="The vital principles guiding every patient interaction and every clinical decision we make."
                        centered={true}
                    />
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        {[
                            { icon: Heart, title: "Patient-Centered", desc: "We put your comfort, concerns, and goals at the heart of every treatment decision." },
                            { icon: Award, title: "Clinical Excellence", desc: "We uphold the highest standards of dental practice through continuous learning." },
                            { icon: Users, title: "Trust & Integrity", desc: "We build lasting relationships based on honest advice, transparency, and reliable care." },
                        ].map((value, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6 p-10 bg-white rounded-[3rem] shadow-premium border-gold-hairline transition-all duration-700 hover:-translate-y-2 group text-center"
                            >
                                <div className="w-16 h-16 bg-brand-navy rounded-[1.25rem] flex items-center justify-center text-brand-gold shadow-xl mx-auto mb-4 transform group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                                    <value.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-black font-serif text-brand-navy group-hover:text-brand-gold transition-colors duration-500 leading-tight">{value.title}</h3>
                                <p className="text-brand-slate/60 font-medium leading-relaxed italic">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
