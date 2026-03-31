"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { companyDetails, services } from "@/data/company";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function ContactFormInner() {
    const searchParams = useSearchParams();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        requirement: "",
    });

    useEffect(() => {
        const updateServiceFromQuery = () => {
            const params = new URLSearchParams(window.location.search);
            const serviceParam = params.get("service");
            if (serviceParam) {
                setFormData(prev => ({ ...prev, service: decodeURIComponent(serviceParam) }));
            }
        };

        updateServiceFromQuery();
        window.addEventListener('popstate', updateServiceFromQuery);
        return () => window.removeEventListener('popstate', updateServiceFromQuery);
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello ${companyDetails.name},
I would like to book a dental consultation.

Name: ${formData.name}
Phone: ${formData.phone}
Service needed: ${formData.service || "General Inquiry"}
Message: ${formData.requirement}`;

        const whatsappUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const inputClass = "w-full px-5 py-3 md:py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-brand-gold/30 focus:bg-white focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all font-medium text-gray-900";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-brand-navy/50 ml-1">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-brand-navy/50 ml-1">Phone Number</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 90372 47022"
                        value={formData.phone}
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-black uppercase tracking-widest text-brand-navy/50 ml-1">Treatment Required</label>
                <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    className={cn(inputClass, "appearance-none cursor-pointer")}
                    onChange={handleChange}
                >
                    <option value="">Select Treatment</option>
                    {services.map((service) => (
                        <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="requirement" className="text-xs font-black uppercase tracking-widest text-brand-navy/50 ml-1">Message</label>
                <textarea
                    id="requirement"
                    name="requirement"
                    rows={4}
                    required
                    placeholder="Tell us about your dental concerns..."
                    value={formData.requirement}
                    className={cn(inputClass, "resize-none")}
                    onChange={handleChange}
                ></textarea>
            </div>

            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitted}
                className={cn(
                    "w-full font-black py-3.5 md:py-5 rounded-2xl shadow-2xl transition-all flex items-center justify-center space-x-3 text-base md:text-lg",
                    isSubmitted ? 'bg-green-600 text-white' : 'bg-brand-navy hover:bg-brand-gold text-white'
                )}
            >
                {isSubmitted ? (
                    <>
                        <CheckCircle2 size={22} />
                        <span>Message Sent!</span>
                    </>
                ) : (
                    <>
                        <span>Send WhatsApp Enquiry</span>
                        <Send size={20} />
                    </>
                )}
            </motion.button>
            <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                We usually respond within a few hours
            </p>
        </form>
    );
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-gray-400">Loading Form...</div>}>
            <ContactFormInner />
        </Suspense>
    );
}
