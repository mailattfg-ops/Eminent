"use client";

import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Star } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";

const bentoConfig = [
    // 1. Tall Left
    {
        title: "Expert Surgery",
        desc: "Clinical precision in every procedure.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2",
        bg: "bg-brand-gold text-white",
        image: "/Images/professional_dental_surgical.webp",
        layout: "tall-image-bottom"
    },
    // 2. Top Mid 1
    {
        title: "Sterilization",
        desc: "Advanced hygiene protocols.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        bg: "bg-brand-cream text-brand-navy",
        image: "/Images/teeth_cleaning.webp",
        layout: "solid-bottom-image"
    },
    // 3. Top Mid 2
    {
        title: "Comfort First",
        desc: "Patient-friendly environment.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        image: "/Images/comfort_dental_lobby.webp",
        bg: "bg-brand-cream text-brand-navy",
        layout: "solid-bottom-image"
    },
    // 4. Tall Right
    {
        title: "Digital Planning",
        desc: "Personalized treatment.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2",
        bg: "bg-brand-navy text-white",
        image: "/Images/luxury_dentals.webp",
        layout: "tall-image-bottom"
    },
    // 5. Middle Wide
    {
        title: "Comprehensive Treatments",
        desc: "Preventive, restorative, and aesthetic procedures tailored for you.",
        span: "col-span-1 md:col-span-4 lg:col-span-2 row-span-1",
        bg: "bg-brand-navyDark text-white",
        image: "/Images/macro_aesthetic.webp",
        layout: "wide-elegant"
    },
    // 6. Bottom Left
    {
        title: "Pain-Conscious",
        desc: "Gentle dental care.",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        bg: "bg-brand-cream text-brand-navy",
        image: "/Images/gentle_dental_care.webp",
        layout: "solid-bottom-image"
    },
    // 7. Bottom Wide
    {
        title: "Ethical Practice",
        desc: "Highest standards of clinical evidence and personalized care.",
        span: "col-span-1 md:col-span-2 lg:col-span-3 row-span-1",
        bg: "bg-brand-gold text-white",
        image: "/Images/dental_hero_bg.webp",
        layout: "wide-side-image"
    }
];

export default function Facilities() {
    return (
        <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden bg-brand-cream" id="facilities">
            {/* Minimal Decorative Background */}


            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    title="State-of-the-Art"
                    highlightText="Facilities"
                    centered
                />

                {/* The "Bento Dashboard" Container */}
                <div className="mt-8 md:mt-12 bg-white rounded-[2.5rem] md:rounded-[3rem] p-4 md:p-6 lg:p-8 relative border border-brand-goldLight">



                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[280px] gap-4 md:gap-5 lg:gap-6 relative z-10">
                        {bentoConfig.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
                                className={cn(
                                    "relative rounded-[2rem] overflow-hidden transition-transform duration-500 hover:scale-[1.02] group",
                                    item.span,
                                    item.bg
                                )}
                            >
                                {/* ---- Layout Handling ---- */}
                                
                                {item.layout === "tall-image-bottom" && (
                                    <div className="flex flex-col h-full p-6">
                                        <div>
                                            <h4 className="font-serif font-black text-2xl md:text-3xl leading-tight mb-2">{item.title}</h4>
                                            <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                                        </div>
                                        <div className="relative w-[110%] -ml-[5%] flex-grow mt-6 rounded-t-[2.5rem] overflow-hidden border-t-4 border-white/10">
                                            <Image src={item.image || "/Images/fallback.webp"} alt={item.title} fill className="object-cover opacity-80 transition-transform duration-[2000ms] group-hover:scale-110" />
                                            <div className={cn("absolute inset-0 bg-gradient-to-t to-transparent", item.bg.includes("gold") ? "from-brand-gold" : "from-brand-navy")} />
                                        </div>
                                    </div>
                                )}
                                {item.layout === "wide-side-image" && (
                                    <div className="flex flex-col md:flex-row h-full p-6 gap-6 items-stretch">
                                        <div className="w-full md:w-[40%] text-left flex flex-col justify-center z-10">
                                            <h4 className="font-serif font-black text-2xl md:text-3xl leading-tight mb-2">{item.title}</h4>
                                            <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                                        </div>
                                        {/* This creates an inset rounded card with perfectly equal margins from the edge of the grid item! */}
                                        <div className="relative flex-grow w-full md:w-[60%] rounded-[1.5rem] overflow-hidden shadow-xl border border-white/20">
                                            <Image src={item.image || "/Images/fallback.webp"} alt={item.title} fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                                            {/* Re-adding the gradient match but now properly contained inside the rounded border box */}
                                           
                                        </div>
                                    </div>
                                )}
                                {item.layout === "wide-elegant" && (
                                    <div className="relative flex flex-col h-full justify-end p-6 md:p-8 overflow-hidden group">
                                        <div className="absolute inset-0 z-0">
                                            <Image src={item.image || "/Images/fallback.webp"} alt={item.title} fill className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 opacity-50 mix-blend-luminosity" />
                                            {/* Gradient layered effect to blend the clinical image on the right elegantly */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark via-brand-navyDark/80 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDark via-brand-navyDark/90 to-transparent w-[80%]" />
                                        </div>
                                        
                                        <div className="relative z-10 w-full md:w-[70%]">

                                            <h4 className="font-serif font-black text-3xl md:text-3xl lg:text-4xl leading-tight mb-3 text-white">{item.title}</h4>
                                            <p className="text-white/80 text-sm md:text-base font-medium max-w-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                )}

                                {item.layout === "solid-bottom-image" && (
                                    <div className="flex flex-col h-full relative border border-gray-200 rounded-[2rem]">
                                        <div className="p-6 relative z-10">
                                            <h4 className="font-serif font-bold text-xl leading-tight mb-1">{item.title}</h4>
                                            <p className="opacity-70 text-xs font-medium">{item.desc}</p>
                                        </div>
                                        <div className="relative flex-grow w-full mt-auto">
                                            {/* Applied shadow-xl here so it casts inside the margins instead of being clipped by the parent's overflow-hidden */}
                                            <div className="absolute inset-0 top-2 mx-6 mb-6 rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] md:shadow-xl border border-brand-gold/10">
                                                <Image src={item.image || "/Images/fallback.webp"} alt={item.title} fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-90" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {item.layout === "wide-banner-elegant" && (
                                    <div className="relative flex h-full w-full overflow-hidden items-center p-6 md:p-8 lg:p-10">
                                        <div className="absolute inset-0 z-0">
                                            <Image src={item.image || "/Images/fallback.webp"} alt={item.title} fill className="object-cover opacity-40 transition-transform duration-[3000ms] group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-brand-gold mix-blend-multiply opacity-80" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold/90 to-transparent opacity-90" />
                                        </div>
                                        
                                        <div className="relative z-10 w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
                                            <h4 className="font-serif font-black text-2xl md:text-3xl lg:text-4xl leading-tight text-white mb-3">{item.title}</h4>
                                            <p className="text-white/80 text-sm md:text-base font-medium max-w-sm">{item.desc}</p>
                                        </div>
                                        
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
