"use client";
import React, { useState } from "react";
import Image from "next/image";

const astrologers = [
  {
    id: 1,
    name: "Rahul Sharma",
    specialty: "Vedic Astrology",
    experience: "10+ Years",
    price: 15,
    img: "/image/user1.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    specialty: "Tarot Reading",
    experience: "5+ Years",
    price: 10,
    img: "/image/user2.jpg",
  },
  {
    id: 3,
    name: "Amit Joshi",
    specialty: "Numerology",
    experience: "8+ Years",
    price: 12,
    img: "/image/user3.jpg",
  },
  {
    id: 4,
    name: "Neha Gupta",
    specialty: "Palmistry",
    experience: "6+ Years",
    price: 8,
    img: "/image/user1.jpg",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    specialty: "Vastu Shastra",
    experience: "12+ Years",
    price: 20,
    img: "/image/user2.jpg",
  },
];

const TalkToAstroger = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredAstrologers = astrologers.filter((astro) => {
    const matchesSearch = astro.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || astro.specialty === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f9ede0] py-30  text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          <span className="text-yellow-600">🔮</span> Talk to an Astrologer
        </h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <input
            type="text"
            placeholder="Search astrologers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="All">All Specialties</option>
            <option value="Vedic Astrology">Vedic Astrology</option>
            <option value="Tarot Reading">Tarot Reading</option>
            <option value="Numerology">Numerology</option>
            <option value="Palmistry">Palmistry</option>
            <option value="Vastu Shastra">Vastu Shastra</option>
          </select>
        </div>

        {/* Astrologers Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAstrologers.length > 0 ? (
            filteredAstrologers.map((astro) => (
              <div
                key={astro.id}
                className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 p-8 relative"
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-6 relative">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md">
                    <Image
                      src={astro.img}
                      alt={astro.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-4 right-[42%] w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow"></span>
                </div>

                {/* Info */}
                <h2 className="text-xl font-bold text-gray-800">
                  {astro.name}
                </h2>
                <p className="text-indigo-600 font-medium">{astro.specialty}</p>
                <p className="text-sm text-gray-500">{astro.experience}</p>
                <p className="mt-3 font-bold text-yellow-600 text-lg">
                  ${astro.price} <span className="text-sm">/ min</span>
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 justify-center">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-5 py-2 rounded-xl shadow hover:opacity-90 transition">
                    Chat
                  </button>
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition">
                    Call
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No astrologers found ✨
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalkToAstroger;
