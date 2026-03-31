"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "How often should I visit the dentist?",
        a: "We recommend a routine dental check-up and cleaning every 6 months. Regular visits help detect problems early, prevent cavities, and maintain healthy gums. If you have specific concerns, we can tailor a schedule that works for you."
    },
    {
        q: "Is teeth whitening safe?",
        a: "Yes — professional teeth whitening performed by a qualified dentist is completely safe. At Eminent Dental Care, we use clinically approved whitening agents with proper protocols to ensure effective and safe results with minimal sensitivity."
    },
    {
        q: "Are clear aligners better than traditional braces?",
        a: "Clear aligners offer comfort, aesthetics, and convenience — you can remove them while eating and brushing. They work well for mild to moderate alignment issues. In some complex cases, traditional braces may be recommended. Dr. Akhila will assess and advise the best option for you."
    },
    {
        q: "How do I care for my teeth after a dental procedure?",
        a: "After any dental procedure, our team will provide specific aftercare instructions tailored to your treatment. Generally, avoid very hot or cold foods immediately after, maintain gentle oral hygiene, and attend any follow-up appointments as scheduled."
    },
    {
        q: "Is dental treatment painful?",
        a: "Modern dentistry has made procedures significantly more comfortable. We use local anaesthesia to ensure pain-free treatment. Our clinic is designed to be calm and patient-friendly, and Dr. Akhila practices gentle, pain-conscious dental care throughout every procedure."
    },
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-gray-100 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-4 md:py-6 flex items-center justify-between text-left group transition-all"
            >
                <div className="flex items-center space-x-4">
                    <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                        isOpen ? "bg-brand-navy text-white" : "bg-brand-navy/5 text-brand-navy"
                    )}>
                        <HelpCircle size={18} />
                    </div>
                    <span className={cn(
                        "text-base md:text-lg font-bold transition-colors",
                        isOpen ? "text-brand-gold" : "text-brand-navy group-hover:text-brand-gold"
                    )}>
                        {question}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "text-brand-gold shrink-0 ml-4",
                        isOpen ? "opacity-100" : "opacity-40"
                    )}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pl-10 md:pl-12 pr-4 md:pr-8">
                            <p className="text-brand-slate/70 font-medium leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-6 md:py-8 lg:py-10 xl:py-12 relative bg-brand-cream">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader
                    badge="FAQs"
                    title="Your Questions,"
                    highlightText="Answered"
                    subtitle="Quick, honest answers to your most common dental questions — because informed patients make the best decisions."
                    centered
                />

                <div className="max-w-3xl mx-auto mt-6 md:mt-10 lg:mt-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden p-4 md:p-8">
                    <div className="space-y-2">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-6 lg:mt-8 xl:mt-10 text-center">
                    <p className="text-brand-slate/50 font-medium text-xs lg:text-sm">
                        Still have questions?{" "}
                        <Link href="/contact#contact" className="ml-1 text-brand-gold font-black hover:underline tracking-tight">
                            Speak to Dr. Akhila directly
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
