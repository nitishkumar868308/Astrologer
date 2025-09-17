"use client";

import React from "react";
import { motion } from "framer-motion";

const FeaturesPage = () => {
    const features = [
        {
            title: "Seamless Video Calls",
            desc: "Connect with anyone, anywhere with crystal clear video calls, optimized for low bandwidth.",
            icon: "/image/user1.jpg",
        },
        {
            title: "Astrological Guidance",
            desc: "Get personalized astrological insights based on your birth chart instantly.",
            icon: "/image/user2.jpg",
        },
        {
            title: "Instant Chat",
            desc: "Chat with friends, mentors, and astrologers anytime with a secure messaging platform.",
            icon: "/image/user3.jpg",
        },
        {
            title: "Secure & Private",
            desc: "All your interactions and data are secured with top-level encryption.",
            icon: "/image/user1.jpg",
        },
        {
            title: "Explore Cosmic Events",
            desc: "Stay updated with daily cosmic insights, planetary movements, and predictions.",
            icon: "/image/user2.jpg",
        },
        {
            title: "Personal Dashboard",
            desc: "Track your interactions, astrology readings, and notifications in one place.",
            icon: "/image/user3.jpg",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-[#fff3e6] to-[#f9ede0] px-5 md:px-20 py-20">
            {/* Hero Section */}
            <section className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-[#b77a3a] mb-4">
                    Features of Astroger
                </h1>
                <p className="text-[#555] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Explore the powerful features of Astroger designed to connect, guide, and inspire you through the cosmos.
                </p>
            </section>

            {/* Features Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-[50px] shadow-xl p-8 flex flex-col items-center text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all"
                    >
                        <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#d9914b] to-[#b77a3a]">
                            <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#b77a3a] mb-3">{feature.title}</h3>
                        <p className="text-gray-700">{feature.desc}</p>
                    </motion.div>
                ))}
            </section>
        </div>
    );
};

export default FeaturesPage;
