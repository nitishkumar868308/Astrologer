"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
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

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[rgba(255,248,240,0.95)] backdrop-blur-md shadow-md text-[#333]"
                    : "bg-transparent shadow-none text-white"
                }`}
        >
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 font-medium text-sm">
                <Link
                    href="/"
                    className="hover:text-[#d9914b] transition-colors duration-200"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="hover:text-[#d9914b] transition-colors duration-200"
                >
                    About
                </Link>
                <Link
                    href="/features"
                    className="hover:text-[#d9914b] transition-colors duration-200"
                >
                    Features
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-[#d9914b] transition-colors duration-200"
                >
                    Contact
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="focus:outline-none text-2xl"
                >
                    {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[rgba(255,248,240,0.95)] backdrop-blur-md shadow-md flex flex-col items-center py-4 md:hidden text-[#333] font-medium space-y-3 transition-all duration-300">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#d9914b]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#d9914b]"
                    >
                        About
                    </Link>
                    <Link
                        href="/features"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#d9914b]"
                    >
                        Features
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#d9914b]"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
