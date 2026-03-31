"use client";

import { motion } from "framer-motion";
import SafeImage from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";
import { companyDetails } from "@/data/company";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    className?: string;
}

export default function PageHero({ 
    title, 
    subtitle, 
    backgroundImage = "/Images/page_hero_clinical.png", 
    className 
}: PageHeroProps) {
    return (
        <section className={cn(
            "relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-brand-navy border-b border-brand-gold/10",
            className
        )}>
            {/* Full-Width Background Canvas */}
            <div className="absolute inset-0 z-0">
                <SafeImage
                    src={backgroundImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-[center_40%] transition-transform duration-[3000ms] scale-105"
                    fallbackIcon="stethoscope"
                />
                
                {/* Cinema-Grade Overlays for Professional Depth */}
                <div className="absolute inset-0 bg-brand-navy/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 via-transparent to-brand-gold/10 opacity-60 z-10" />
            </div>

            {/* Centered Content Layer */}
            <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
                    
                    {/* Minimalist Gold Divider */}
                    <motion.div 
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1 }}
                        className="h-px w-16 bg-brand-gold/50" 
                    />

                    <div className="space-y-4 md:space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-serif text-white leading-[0.95] tracking-tighter drop-shadow-2xl"
                        >
                            {title}
                        </motion.h1>
                        
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 0.7, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-base md:text-lg lg:text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed italic border-white/10"
                            >
                                "{subtitle}"
                            </motion.p>
                        )}
                    </div>

                    {/* Faded Branding Detail */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 0.6 }}
                        className="pt-4"
                    >
                     
                    </motion.div>
                </div>
            </div>

            {/* Subtle Texture Grain Overlay */}
            <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />
            
            {/* Decorative Top/Bottom Hairlines */}
            <div className="absolute top-8 inset-x-8 md:inset-x-12 h-px bg-white/5 z-20" />
            <div className="absolute bottom-8 inset-x-8 md:inset-x-12 h-px bg-white/5 z-20" />
        </section>
    );
}
