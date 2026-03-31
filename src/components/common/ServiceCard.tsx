"use client";

import { motion } from "framer-motion";
import {
    Stethoscope,
    Sparkles,
    Shield,
    Activity,
    Zap,
    Sun,
    AlignCenter,
    LayoutGrid,
    Heart,
    Scissors,
    Star,
    Wind,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "@/components/ui/BookingModal";

const IconMap: Record<string, any> = {
    Stethoscope,
    Sparkles,
    Shield,
    Activity,
    Zap,
    Sun,
    AlignCenter,
    LayoutGrid,
    Heart,
    Scissors,
    Star,
    Wind,
};

interface ServiceCardProps {
    title: string;
    description: string;
    iconName: string;
    imageUrl?: string;
    index: number;
}

export default function ServiceCard({ title, description, iconName, imageUrl, index }: ServiceCardProps) {
    const Icon = IconMap[iconName] || Stethoscope;
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white border-gold-hairline rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-premium hover:shadow-2xl transition-all duration-700"
        >
            {/* Framed Image Section */}
            <div className="relative p-3 md:p-4 pb-0">
                <div className="relative h-48 md:h-56 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-navy">
                    <Image
                        src={imageUrl || "/Images/fallback.webp"}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    {/* Artistic gradient light-leak */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 via-transparent to-brand-gold/10 opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                </div>
                
                {/* Floating Icon Badge */}
                <div className="absolute top-6 right-6 z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                        <Icon size={20} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative">
         

                <div className="space-y-4 relative z-10">
                    <div className="w-8 h-[2px] bg-brand-gold/30 group-hover:w-12 group-hover:bg-brand-gold transition-all duration-700" />
                    
                    <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-black font-serif text-brand-navy group-hover:text-brand-gold transition-colors duration-500 leading-tight">
                            {title}
                        </h3>
                        <p className="text-brand-slate/50 text-sm md:text-base font-medium leading-relaxed italic pr-2">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-5">
                    <button
                        className="relative w-full overflow-hidden flex items-center justify-center p-4 rounded-2xl text-brand-navy border border-brand-navy/10 hover:border-transparent transition-colors duration-500 group/btn"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsBookingOpen(true);
                        }}
                    >
                        {/* Elegant Slide-up Background */}
                        <div className="absolute inset-0 bg-brand-navy translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                        {/* Subtle inner box shadow for depth when not hovered */}
                        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-brand-navy/5 group-hover/btn:opacity-0 transition-opacity duration-300" />

                        <div className="relative z-10 flex items-center gap-3">
                            <span className="font-semibold text-xs md:text-sm uppercase tracking-[0.2em] group-hover/btn:text-white transition-colors duration-500 delay-75">
                                Request Consultation
                            </span>
                            <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover/btn:bg-brand-gold transition-colors duration-500 delay-100">
                                <ArrowRight size={14} className="text-brand-gold group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all duration-300" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </motion.div>
    );
}
