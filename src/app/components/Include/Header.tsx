"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const hero = document.querySelector(".hero");

        const handleScroll = () => {
            if (window.scrollY > (hero?.clientHeight || 0) - 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]); // <-- dependency added

    return (
        <header
            className={`fixed top-0 w-full flex justify-between items-center px-10 py-4 z-50 transition-all duration-300 ${scrolled
                ? "bg-[rgba(255,248,240,0.95)] backdrop-blur-md shadow-md text-[#333]"
                : "bg-transparent shadow-none text-white"
                }`}
        >
            <div className="relative h-10 w-32">
                <Link href="/">
                    <Image
                        src="/image/logo.jpg"
                        alt="Astroger Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </Link>
            </div>

            <nav className="flex space-x-6">
                <Link href="/" className="hover:text-[#d9914b] font-medium">Home</Link>
                <Link href="/about" className="hover:text-[#d9914b] font-medium">About</Link>
                <Link href="features" className="hover:text-[#d9914b] font-medium">Features</Link>
                <Link href="/contact" className="hover:text-[#d9914b] font-medium">Contact</Link>
            </nav>
        </header>
    );
}
