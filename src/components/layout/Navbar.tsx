"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, companyDetails } from "@/data/company";
import { Phone } from "lucide-react";
import AnimatedHamburger from "./AnimatedHamburger";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="w-full max-w-full relative mx-auto">
                {/* Main Navbar Container */}
                <div className="bg-white/95 backdrop-blur-xl text-brand-navy py-1 md:py-2 px-6 md:px-10 flex items-center shadow-md border-b border-black/5 relative z-20">

                    {/* Header Contents Group (Logo + Nav) */}
                    <div className="flex items-center gap-8 flex-1">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/Images/logo.svg"
                                alt="Eminent Dental Care Logo"
                                width={80}
                                height={80}
                                className="object-contain w-16 h-16 md:w-20 md:h-20"
                                priority
                                onError={(e) => {
                                    // Fallback to fallback.webp if logo.svg not found
                                    (e.target as HTMLImageElement).src = "/Images/fallback.webp";
                                }}
                            />
                        </Link>

                        {/* Desktop Nav Links */}
                        <ul className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.name} className="relative">
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "relative px-5 py-2.5 font-bold text-[12px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center rounded-full group min-w-[110px]",
                                                isActive ? "text-white" : "text-brand-navy/60 hover:text-brand-navy hover:bg-black/5"
                                            )}
                                        >
                                            <span className="relative z-10">{link.name}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-pill"
                                                    className="absolute inset-0 bg-brand-gold rounded-full shadow-md z-0"
                                                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Phone Button & Mobile Toggle */}
                    <div className="flex items-center space-x-4 ml-auto">
                        <a
                            href={`tel:${companyDetails.phone}`}
                            className="bg-brand-navy text-white px-6 py-3 rounded-full flex items-center space-x-2.5 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <div className="bg-brand-gold rounded-full p-1 text-white flex-shrink-0 flex items-center justify-center">
                                <Phone size={12} fill="currentColor" />
                            </div>
                            <span className="font-black text-[12px] uppercase tracking-[0.2em] hidden sm:inline">{companyDetails.phone}</span>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-brand-navy bg-black/5 hover:bg-black/10 rounded-xl transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            <AnimatedHamburger isOpen={isOpen} />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-2 z-10 lg:hidden px-4"
                        >
                            <nav className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 flex flex-col space-y-4">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={cn(
                                                "font-black text-lg px-6 py-4 rounded-2xl transition-all border-2",
                                                isActive
                                                    ? "bg-brand-gold/10 border-brand-gold text-brand-navy"
                                                    : "bg-gray-50/50 border-transparent text-gray-900"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <a
                                    href={`tel:${companyDetails.phone}`}
                                    className="bg-brand-navy text-white px-4 py-4 rounded-2xl font-bold text-center flex items-center justify-center space-x-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={20} fill="white" />
                                    <span>Call {companyDetails.phone}</span>
                                </a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
