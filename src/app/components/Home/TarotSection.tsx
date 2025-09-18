import React from "react";

const TarotSection = () => {
  return (
    <section className="py-20 bg-white  text-black text-center">
      <h2 className="text-4xl font-bold mb-8">Guided by the Stars</h2>
      <p className="mb-12 text-lg">Revealed by the Cards</p>

      <div className="flex justify-center">
        <div className="w-48 h-72 relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="/image/image3.jpg" // image3
            alt="The Sun"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 text-lg font-semibold">
            The Sun
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarotSection;
