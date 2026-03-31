"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Stethoscope, Sparkles, Shield, Activity, Phone, Star } from "lucide-react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
    fallbackIcon?: "stethoscope" | "sparkles" | "shield" | "activity" | "phone" | "star";
}

const iconMap = {
    stethoscope: Stethoscope,
    sparkles: Sparkles,
    shield: Shield,
    activity: Activity,
    phone: Phone,
    star: Star,
};

export default function SafeImage({ src, alt, className, fallbackIcon = "stethoscope", ...props }: SafeImageProps) {
    // Defensive check for malformed or missing URLs to prevent Next.js construct URL crash
    const isValidSrc = typeof src === 'string' && (src.startsWith('/') || src.startsWith('http') || src.startsWith('data:'));
    const [error, setError] = useState(!isValidSrc);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const Icon = iconMap[fallbackIcon] || iconMap.stethoscope;
    const resolvedSrc = typeof src === 'string' ? src : "";

    if (error || !isValidSrc) {
        return (
            <div 
                className={cn(
                    "w-full h-full bg-gradient-to-br from-brand-navy/5 to-brand-gold/10 flex items-center justify-center relative overflow-hidden",
                    className
                )}
            >
    
                
                <div className="flex flex-col items-center gap-3 relative z-10 px-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-brand-gold">
                        <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40">Eminent Dental Care</p>
                        <p className="text-xs font-bold text-brand-gold/60 italic">{alt || "Modern Dental Care"}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Image
            {...props}
            src={resolvedSrc}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
}
