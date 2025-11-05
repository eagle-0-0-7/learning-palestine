"use client";
import { useState } from "react";
import Image from "next/image";

interface Tab {
    id: string;
    label: string;
    icon: string;
}

export const TopicTabs = () => {
    const [activeTab] = useState<string>("palestine-101");

    const tabs: Tab[] = [
        {
            id: "palestine-101",
            label: "Palestine 101",
            icon: "/thinkers/icon-1.svg",
        },
        {
            id: "rashid-khalidi",
            label: "Dr. Rashid Khalidi’s Lectures",
            icon: "/thinkers/icon-2.svg",
        },
    ];

    return (
        <nav
            role="tablist"
            aria-label="Topic navigation tabs"
            className="flex justify-center gap-1 sm:gap-4 w-full border-b border-gray-200 overflow-x-auto whitespace-nowrap no-scrollbar"
        >
            {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                const isDisabled = tab.id === "rashid-khalidi"; // not clickable

                return (
                    <button
                        key={tab.id}
                        disabled={isDisabled}
                        className={`flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-t-lg text-xs sm:text-base transition-all 
                            ${isActive ? "border-b-2 border-[#0066FF] text-[#0066FF] bg-[#E6F0FF]" : "text-[#6B7280]"} 
                            ${isDisabled ? "cursor-default opacity-90" : ""}
                        `}>
                        <div className="relative w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0">
                            <Image
                                src={tab.icon}
                                alt=""
                                fill
                                className="object-contain"
                                aria-hidden="true"
                            />
                        </div>
                        <span>{tab.label}</span>
                    </button>
                );
            })}
        </nav>
    );
};
