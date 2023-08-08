"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("Email Template");

    const tabs = ["Email Template", "Push Notifications", "SMS Notifications"];

    return (
        <div className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition-transform duration-200 ease-in-out">
            <Link href="/" className="text-white flex items-center space-x-2 px-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h9m5-4v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h16a1 1 0 011 1v4a1 1 0 01-.293.707"></path>
                </svg>
                <span className="text-2xl font-extrabold">ENS</span>
            </Link>
            
            <nav>
                {tabs.map((tab, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setActiveTab(tab)}
                        className={`p-2 mt-1 block hover:bg-gray-700 rounded-md ${tab === activeTab && "bg-gray-700"}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={`/${tab.toLowerCase().replace(" ", "-")}`} legacyBehavior>
                            <a className="text-white text-sm">{tab}</a>
                        </Link>
                    </motion.div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;