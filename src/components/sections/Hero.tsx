"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import BookingModal from "../ui/BookingModal";
import { companyDetails } from "@/data/company";
import { Phone, ArrowRight, MessageCircle, Star } from "lucide-react";

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="relative min-h-[100dvh] lg:h-[100dvh] flex items-stretch overflow-hidden bg-brand-cream pt-[72px] lg:pt-0">
            {/* Split Perspective Layout */}
            <div className="flex-1 w-full h-full flex flex-col lg:flex-row">
                
                {/* Content Side (Alabaster White) */}
                <div className="flex-none lg:flex-1 flex items-center justify-center lg:justify-start px-6 sm:px-10 lg:px-16 xl:px-24 py-12 sm:py-20 lg:py-0 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8 md:space-y-10 max-w-2xl w-full"
                    >
                        {/* Museum-Grade Typography */}
                        <div className="space-y-6">
                            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl xl:text-7xl font-black font-serif text-brand-navy leading-[1.05] md:leading-[0.95] tracking-tighter text-balance">
                                Your Smile, <br />
                                <span className="text-brand-gold">Our Art.</span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-brand-slate/60 font-medium max-w-lg leading-relaxed italic border-l-2 border-brand-gold/20 pl-5">
                                "{companyDetails.tagline} — delivered with clinical precision and artistic care by {companyDetails.doctorName}."
                            </p>
                        </div>

                        {/* Dual-Action Luxury CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsBookingOpen(true)}
                                className="group relative overflow-hidden bg-brand-navy text-white px-8 sm:px-10 py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-gold transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto"
                            >
                                <span className="relative z-10">Book Visit</span>
                                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                            </motion.button>

                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={`https://wa.me/91${companyDetails.whatsapp}`}
                                target="_blank"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white border-gold-hairline text-brand-navy px-8 sm:px-10 py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all hover:bg-brand-gold/5 shadow-sm group"
                            >
                                <MessageCircle size={18} className="text-brand-gold" />
                                <span>WhatsApp Us</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Architectural Image Side */}
                <div className="flex-1 w-full lg:w-auto relative overflow-hidden min-h-[40vh] sm:min-h-[50vh] lg:min-h-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-brand-navy group"
                    >
                        <SafeImage
                            src="/Images/dental_hero_bg.png"
                            alt="Eminent Dental Care Interior"
                            fill
                            priority
                            className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                            fallbackIcon="stethoscope"
                        />
                        
                        {/* Overlay with Gold Sheen */}
                        <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/20 transition-all duration-700" />
                        
                        {/* Sophisticated Bottom-Align Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-center gap-4 sm:gap-6"
                        >
                            <div className="h-px w-10 sm:w-16 bg-brand-gold/30" />
                            <div className="text-right space-y-1">
                                <p className="text-white text-xs sm:text-sm font-black font-serif uppercase tracking-widest">Clinical Excellence</p>
                                <p className="text-brand-gold text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">{companyDetails.experience} Expertise</p>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    {/* Decorative Background Text (Faded) */}
                    <div className="absolute -right-20 bottom-32 select-none pointer-events-none opacity-[0.03] lg:rotate-90 origin-bottom hidden lg:block">
                        <span className="text-[12rem] font-black font-serif text-brand-navy uppercase tracking-tighter">ESTD 2016</span>
                    </div>
                </div>

            </div>

            {/* Subtle Texture Grain Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay" />
            
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
}
