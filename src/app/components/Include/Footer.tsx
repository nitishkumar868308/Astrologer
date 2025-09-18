"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/image/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/image/logo.jpg" alt="Astroger Logo" className="h-12 w-auto mb-4 md:mb-0" />
          <p className="text-sm text-gray-200">© 2025 Astroger. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <Link href="#about" className="hover:text-[#d9914b] transition-colors">About</Link>
            <Link href="#features" className="hover:text-[#d9914b] transition-colors">Features</Link>
            <Link href="#contact" className="hover:text-[#d9914b] transition-colors">Contact</Link>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg">Get in Touch</h3>
            <a href="mailto:info@astroger.com" className="hover:text-[#d9914b] transition-colors">info@astroger.com</a>
            <a href="tel:+911234567890" className="hover:text-[#d9914b] transition-colors">+91 12345 67890</a>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-[#d9914b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#d9914b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.57 2.16-2.72-.96.57-2.03.99-3.17 1.21C19.42 3.6 18.3 3 17.05 3c-2.66 0-4.81 2.15-4.81 4.8 0 .38.04.76.12 1.12-4-.2-7.55-2.12-9.92-5.03-.41.7-.64 1.5-.64 2.36 0 1.63.83 3.08 2.09 3.93-.77-.03-1.5-.24-2.14-.59v.06c0 2.28 1.62 4.18 3.77 4.61-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08.59 1.84 2.3 3.18 4.33 3.22-1.58 1.24-3.57 1.99-5.73 1.99-.37 0-.73-.02-1.09-.06C2.98 21.29 6.53 22 10.29 22c12.35 0 19.12-10.23 19.12-19.12 0-.29-.01-.57-.02-.85 1.31-.94 2.45-2.12 3.35-3.46z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
