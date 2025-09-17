"use client";
import React from "react";

const ContactPage = () => {
    return (
        <div className="bg-[#f9ede0] min-h-screen py-20 px-5 md:px-20">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#b77a3a] mb-10">
                Contact Us
            </h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-[50px] shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-[#d9914b]">Get in Touch</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-[#d9914b] focus:border-[#d9914b] outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-[#d9914b] focus:border-[#d9914b] outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows={5}
                                className="mt-1 w-full p-3 rounded-lg border border-gray-300 focus:ring-[#d9914b] focus:border-[#d9914b] outline-none resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#d9914b] text-white py-3 rounded-full font-bold hover:bg-[#b77a3a] transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className="bg-white p-6 rounded-[50px] shadow-lg flex flex-col space-y-3">
                        <h3 className="text-xl font-semibold text-[#d9914b]">Email</h3>
                        <p className="text-gray-700">support@astroger.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-[50px] shadow-lg flex flex-col space-y-3">
                        <h3 className="text-xl font-semibold text-[#d9914b]">Phone</h3>
                        <p className="text-gray-700">+91 9876543210</p>
                    </div>
                    <div className="bg-white p-6 rounded-[50px] shadow-lg flex flex-col space-y-3">
                        <h3 className="text-xl font-semibold text-[#d9914b]">Address</h3>
                        <p className="text-gray-700">123 Astroger Lane, Mumbai, India</p>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="max-w-6xl mx-auto mt-16">
                <div className="w-full h-64 md:h-96 bg-gray-300 rounded-[50px] flex items-center justify-center text-gray-500 font-medium">
                    Map Placeholder
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
