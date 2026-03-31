"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { companyDetails } from "@/data/company";

export default function WhatsAppButton() {
    const message = encodeURIComponent(`Hi ${companyDetails.name}, I'd like to book a dental consultation.`);
    const waUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${message}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Label - shows on hover on desktop */}
            <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-[160px] transition-all duration-500 whitespace-nowrap pl-0 group-hover:pl-4 text-sm font-bold">
                Chat on WhatsApp
            </span>
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <MessageCircle size={28} fill="white" strokeWidth={0} />
            </div>
        </a>
    );
}
