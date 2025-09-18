"use client"
import React from "react";
import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <section className="hero relative h-[75vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden rounded-b-[120px]">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/image/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl px-5 text-white flex flex-col items-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeIn">
                        Welcome to Astroger
                    </h2>
                    <p className="text-md sm:text-lg md:text-xl mb-6 drop-shadow-md animate-fadeIn delay-200">
                        Your Gateway to the Stars – Chat, Connect & Explore
                    </p>
                    <Link
                        href="#about"
                        className="inline-block px-7 py-3 bg-[#d9914b] font-bold rounded-full shadow-lg hover:bg-[#b77a3a] transition-all duration-300 animate-fadeIn delay-400"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Tailwind Animations */}
            <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
        </>
    );
};

export default HomePage;
