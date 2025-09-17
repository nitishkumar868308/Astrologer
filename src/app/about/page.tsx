"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#f9ede0] px-5 md:px-20 py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#b77a3a] mb-4">
          About Astroger
        </h1>
        <p className="text-[#555] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Astroger is your cosmic companion – connecting people through chat,
          video calls, and personalized astrological insights. Our mission is
          to help you explore the stars while building meaningful connections.
        </p>
      </section>

      {/* Mission / Vision / Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Our Vision",
            desc: "To bring people closer while exploring the wonders of the cosmos.",
            color: "from-[#d9914b] to-[#b77a3a]",
          },
          {
            title: "Our Mission",
            desc: "Create seamless connections through chat, video, and personalized astrology.",
            color: "from-[#b77a3a] to-[#995f2f]",
          },
          {
            title: "Our Values",
            desc: "Trust, transparency, and a cosmic experience that feels personal for everyone.",
            color: "from-[#d9914b] to-[#b77a3a]",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white p-8 rounded-[40px] shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all text-center border-t-4 border-transparent hover:border-t-[#d9914b]`}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#d9914b]">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-[#b77a3a] mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Priya Sharma",
              role: "Co-Founder & CEO",
              img: "/image/user1.jpg",
            },
            {
              name: "Rohit Mehra",
              role: "CTO",
              img: "/image/user2.jpg",
            },
            {
              name: "Ananya Verma",
              role: "Lead Astrologer",
              img: "/image/user3.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[40px] shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-[#d9914b]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
