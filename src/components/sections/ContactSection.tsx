"use client";

import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import ContactForm from "@/components/common/ContactForm";
import { companyDetails } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative overflow-hidden bg-brand-cream" id="contact">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #B8922A 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Get In Touch"
                    title="Start Your"
                    highlightText="Smile Journey"
                    subtitle="Book your appointment or send us an enquiry — Dr. Akhila and our team are ready to help."
                    centered={true}
                />

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-stretch mt-6 md:mt-8 lg:mt-10 xl:mt-12">

                    {/* Left: Contact Info & Map */}
                    <div className="lg:col-span-5 flex flex-col space-y-8">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Clinic Address",
                                    details: "Parappanagadi Road, Tanur, Opp. Eminent Electricals, 676302",
                                },
                                {
                                    icon: Phone,
                                    title: "Call / WhatsApp",
                                    details: `+91 ${companyDetails.phone}`,
                                    href: `tel:${companyDetails.phone}`,
                                },
                                {
                                    icon: Mail,
                                    title: "Email Us",
                                    details: companyDetails.email,
                                    href: `mailto:${companyDetails.email}`,
                                },
                                {
                                    icon: Clock,
                                    title: "Working Hours",
                                    details: "Mon–Sat: 10:00 AM – 7:00 PM | Sundays by Appointment",
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="flex items-center space-x-6 p-6 rounded-[2.5rem] bg-white border-gold-hairline shadow-premium transition-all duration-500 group group-hover:-translate-y-1 relative"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-gold shrink-0 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-lg relative z-10">
                                        <item.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 mb-1 leading-none">{item.title}</h4>
                                        {item.href ? (
                                            <a href={item.href} className="font-extrabold text-brand-navy text-base md:text-lg hover:text-brand-gold transition-colors block leading-tight">{item.details}</a>
                                        ) : (
                                            <p className="font-extrabold text-brand-navy text-base md:text-lg leading-tight italic pr-4">{item.details}</p>
                                        )}
                                    </div>
                                    
                                    {/* Subtle gradient accent for cards */}
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Google Map */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex-grow min-h-[350px] lg:min-h-0 rounded-[3rem] bg-white border-gold-hairline shadow-premium relative overflow-hidden group"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.123456789!2d75.86720!3d10.98840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE4LjIiTiA3NcKwNTInMDIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale contrast-[1.1] brightness-[1.05]"
                            ></iframe>

                            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-[2rem] bg-white/95 backdrop-blur-md border border-brand-gold/20 shadow-2xl flex items-center justify-between">
                                <div className="pr-4">
                                    <h5 className="font-black text-brand-navy uppercase tracking-widest text-[10px] mb-1">Clinic Hub</h5>
                                    <p className="text-brand-navy font-black text-xs sm:text-sm leading-tight italic decoration-brand-gold decoration-2 underline-offset-4 underline">Eminent Dental Care, Tanur</p>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Tanur,+Malappuram,+Kerala+676302"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-brand-navy text-brand-gold rounded-[1.25rem] flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-xl group-hover:rotate-12 transform"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-10 md:p-16 rounded-[4rem] shadow-premium border-gold-hairline relative h-full flex flex-col"
                        >
                            {/* Brand watermark icon */}
                            <div className="absolute -top-10 -right-10 opacity-[0.02] pointer-events-none -rotate-12">
                                <Phone size={300} className="text-brand-navy" />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-12">
                                    <div className="h-1 w-12 bg-brand-gold rounded-full mb-6" />
                                    <h3 className="text-4xl font-black font-serif text-brand-navy mb-3 leading-none tracking-tight">Send an Enquiry</h3>
                                    <p className="text-brand-slate/60 font-medium italic text-lg leading-relaxed">"We'll connect with you on WhatsApp within a few hours to schedule your visit."</p>
                                </div>
                                <div className="flex-grow">
                                    <ContactForm />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
