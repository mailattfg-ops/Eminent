"use client";

import Link from "next/link";
import Image from "next/image";
import { companyDetails, navLinks } from "@/data/company";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-cream border-t border-brand-navy/5 pt-12 pb-6 relative overflow-hidden">
            {/* Premium Decorative Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full -ml-24 -mb-24 blur-[80px]"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-stretch">
                    {/* Column 2: Navigation */}
                    <div className="space-y-6 lg:order-2">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-navy/50">Explore</h4>
                            <div className="h-1 w-8 bg-brand-gold/60 rounded-full"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-navy/70 hover:text-brand-gold transition-all duration-300 font-extrabold flex items-center group text-base"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-navy/20 mr-3 group-hover:w-4 group-hover:bg-brand-gold transition-all duration-500"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6 lg:order-3">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-navy/50">Treatments</h4>
                            <div className="h-1 w-8 bg-brand-gold/60 rounded-full"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {[
                                { name: "Consultation & Check-ups", href: "/services#dental-consultation-check-ups" },
                                { name: "Teeth Cleaning", href: "/services#teeth-cleaning-polishing" },
                                { name: "Teeth Whitening", href: "/services#teeth-whitening-stain-removal" },
                                { name: "Clear Aligners", href: "/services#clear-aligner-treatment" },
                                { name: "Pediatric Care", href: "/services#pediatric-dental-care" },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-brand-navy/60 hover:text-brand-gold font-bold flex items-center group text-sm transition-colors"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-sm bg-brand-navy/10 mr-3 rotate-45 group-hover:bg-brand-gold group-hover:rotate-90 transition-all duration-500"></div>
                                        <span>{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6 lg:order-4 flex flex-col">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-navy/50">Contact</h4>
                            <div className="h-1 w-8 bg-brand-gold/60 rounded-full"></div>
                        </div>
                        <div className="space-y-4 flex-grow flex flex-col justify-start">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center shrink-0 text-brand-gold">
                                    <MapPin size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-navy/40">Find Us</p>
                                    <p className="text-xs font-bold text-brand-navy/80 leading-tight">Parappanagadi Road, Tanur, Opp. Eminent Electricals, 676302</p>
                                </div>
                            </div>
                            <a href={`tel:${companyDetails.phone}`} className="flex items-center space-x-4 group hover:translate-x-1 transition-transform">
                                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center shrink-0 text-brand-gold">
                                    <Phone size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-navy/40">Call / WhatsApp</p>
                                    <p className="text-xs font-black text-brand-navy/90 group-hover:text-brand-gold transition-colors">{companyDetails.phone}</p>
                                </div>
                            </a>
                            <a href={`mailto:${companyDetails.email}`} className="flex items-center space-x-4 group hover:translate-x-1 transition-transform">
                                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center shrink-0 text-brand-gold">
                                    <Mail size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-navy/40">Email</p>
                                    <p className="text-xs font-black text-brand-navy/90 break-all group-hover:text-brand-gold transition-colors">{companyDetails.email}</p>
                                </div>
                            </a>
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center shrink-0 text-brand-gold">
                                    <Clock size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-navy/40">Hours</p>
                                    <p className="text-xs font-bold text-brand-navy/80 leading-tight">Mon–Sat: 10:00 AM – 7:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 1: Brand & Logo */}
                    <div className="lg:order-1 lg:pr-8 flex flex-col justify-between">
                        <Link href="/" className="inline-block transition-transform duration-500">
                            <div className="inline-block overflow-hidden relative w-36 h-36 md:w-48 md:h-48">
                                <Image
                                    src="/Images/logo.svg"
                                    alt="Eminent Dental Care Logo"
                                    fill
                                    sizes="(max-width: 768px) 128px, 192px"
                                    className="object-contain object-left relative z-10"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "/Images/fallback.webp";
                                    }}
                                />
                            </div>
                        </Link>
                        <p className="text-brand-navy/50 text-xs font-medium leading-relaxed mt-4 hidden lg:block">
                            Providing modern, patient-centered dental care in Tanur, Malappuram.
                        </p>
                    </div>
                </div>

                {/* Final Copyright */}
                <div className="mt-4 pt-4 lg:mt-12 lg:pt-8 border-t border-brand-navy/10 flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-6">
                    {/* Copyright & Terms */}
                    <div className="order-2 md:order-1 text-center md:text-left flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/40">
                            © {new Date().getFullYear()} {companyDetails.name}
                        </p>
                        <span className="hidden sm:inline-block text-brand-navy/20 text-[10px]">|</span>
                        <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 hover:text-brand-gold transition-all duration-300 relative group pt-2 sm:pt-0">
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold/50 group-hover:w-full transition-all duration-500"></span>
                        </Link>
                        <span className="hidden sm:inline-block text-brand-navy/20 text-[10px]">|</span>
                        <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 hover:text-brand-gold transition-all duration-300 relative group pt-2 sm:pt-0">
                            Terms & Conditions
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold/50 group-hover:w-full transition-all duration-500"></span>
                        </Link>
                    </div>

                    {/* Designer Link */}
                    <div className="order-3 md:order-2 flex justify-center md:justify-end">
                        <a
                            href="https://thinkforgeglobal.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9px] font-bold text-brand-navy/30 hover:text-brand-gold transition-colors flex flex-col md:flex-row items-center group text-center"
                        >
                            <span className="uppercase tracking-[0.3em] mb-1 md:mb-0">Designed & Developed by</span>
                            <span className="md:ml-2 text-brand-navy/50 font-black group-hover:text-brand-gold transition-colors">THINK FORGE GLOBAL</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
