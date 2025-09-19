// import React from "react";

// const cards = [
//   { id: 1, img: "/image/image3.jpg", name: "The Sun" },
//   { id: 2, img: "/image/image3.jpg", name: "The Moon" },
//   { id: 3, img: "/image/image3.jpg", name: "The Star" },
//   { id: 4, img: "/image/image3.jpg", name: "The Lovers" },
//   { id: 5, img: "/image/image3.jpg", name: "The Magician" },
// ];

// const TarotSection = () => {
//   if (!cards || cards.length === 0) return null;

//   const totalCards = cards.length;
//   const spacing = 250; // desktop spacing
//   const cardWidth = 300;
//   const cardHeight = 500;
//   const middleIndex = Math.floor(totalCards / 2);

//   return (
//     <section className="relative py-20 bg-[#fdf8f3] text-center overflow-hidden">
//       <h2 className="text-4xl font-bold mb-4">Guided by the Stars</h2>
//       <p className="mb-12 text-lg">Revealed by the Cards</p>

//       {/* Desktop Layout */}
//       <div className="hidden md:flex relative w-full justify-center items-end" style={{ height: "700px" }}>
//         {cards.map((card, index) => {
//           const distanceFromMiddle = index - middleIndex;
//           const rotation = distanceFromMiddle * 15;

//           let verticalOffset;
//           if (index === 0 || index === totalCards - 1) {
//             verticalOffset = 0;
//           } else {
//             const maxOffset = 180;
//             const offsetStep = 50;
//             verticalOffset = maxOffset - Math.abs(distanceFromMiddle) * offsetStep;
//           }

//           const zIndex = totalCards - Math.abs(distanceFromMiddle);
//           const offsetX = distanceFromMiddle * spacing;

//           return (
//             <div
//               key={card.id}
//               className="absolute transform transition duration-500 hover:scale-110"
//               style={{
//                 bottom: `${verticalOffset}px`,
//                 transform: `translateX(${offsetX}px) rotate(${rotation}deg)`,
//                 width: `${cardWidth}px`,
//                 height: `${cardHeight}px`,
//                 zIndex: zIndex,
//               }}
//             >
//               <img
//                 src={card.img}
//                 alt={card.name}
//                 className="w-full h-full object-cover rounded-xl shadow-xl cursor-pointer"
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* Mobile Layout */}
//       <div className="flex flex-col md:hidden items-center gap-6">
//         {cards.map((card) => (
//           <div key={card.id} className="w-72 h-[400px] transform transition duration-500 hover:scale-105">
//             <img
//               src={card.img}
//               alt={card.name}
//               className="w-full h-full object-cover rounded-xl shadow-xl cursor-pointer"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TarotSection;

"use client"
import React, { useState } from "react";

const cards = [
  { id: 1, img: "/image/image3.jpg", name: "The Sun", description: "Service 1 description goes here." },
  { id: 2, img: "/image/image3.jpg", name: "The Moon", description: "Service 2 description goes here." },
  { id: 3, img: "/image/image3.jpg", name: "The Star", description: "Service 3 description goes here." },
  { id: 4, img: "/image/image3.jpg", name: "The Lovers", description: "Service 4 description goes here." },
  { id: 5, img: "/image/image3.jpg", name: "The Magician", description: "Service 5 description goes here." },
];

const backImages = [
  "/image/tarot-01-dark.jpg",
  "/image/tarot-02-dark.jpg",
  "/image/tarot-03-dark.jpg",
  "/image/tarot-04-dark.jpg",
  "/image/tarot-05-dark.jpg",
];

type CardType = {
  id: number;
  img: string;
  name: string;
  description: string;
};

type MobileCardProps = {
  card: CardType;
  backImg: string;
};

const MobileCard: React.FC<MobileCardProps> = ({ card, backImg }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-[400px] perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transform transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "rotate-y-180" : ""
          }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl shadow-xl overflow-hidden">
          <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl flex flex-col justify-center items-center p-4 text-white"
          style={{
            backgroundImage: `url('${backImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
          <p className="text-center text-sm">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const TarotSection = () => {
  if (!cards || cards.length === 0) return null;

  const totalCards = cards.length;
  const spacing = 250;
  const cardWidth = 300;
  const cardHeight = 500;
  const middleIndex = Math.floor(totalCards / 2);

  return (
    <section className="relative py-20 bg-white text-center overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4 inline-block relative">
        Guided by the Stars
        <span className="block h-1 bg-gray-400 mt-2 rounded w-full"></span>
      </h1>
      {/* <p className="mb-12 text-lg">Revealed by the Cards</p> */}

      {/* Desktop Layout */}
      <div className="hidden md:flex relative w-full justify-center items-end" style={{ height: "700px" }}>
        {cards.map((card, index) => {
          const distanceFromMiddle = index - middleIndex;
          const rotation = distanceFromMiddle * 15;

          let verticalOffset;
          if (index === 0 || index === totalCards - 1) {
            verticalOffset = 0;
          } else {
            const maxOffset = 180;
            const offsetStep = 50;
            verticalOffset = maxOffset - Math.abs(distanceFromMiddle) * offsetStep;
          }

          const zIndex = totalCards - Math.abs(distanceFromMiddle);
          const offsetX = distanceFromMiddle * spacing;

          // Select back image using modulo
          const backImg = backImages[index % backImages.length];

          return (
            <div
              key={card.id}
              className="absolute perspective-1000 cursor-pointer"
              style={{
                bottom: `${verticalOffset}px`,
                transform: `translateX(${offsetX}px) rotate(${rotation}deg)`,
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                zIndex: zIndex,
              }}
            >
              <div className="relative w-full h-full group transform transition-transform duration-700 hover:scale-110 hover:rotate-y-180 [transform-style:preserve-3d]">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Optional: soft vignette for depth */}
                  {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div> */}
                </div>



                {/* Back Side */}
                <div
                  className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl flex flex-col justify-center items-center p-4 text-white"
                  style={{
                    backgroundImage: `url('${backImg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
                  <p className="text-center text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      {/* <div className="flex flex-col md:hidden items-center gap-6">
        {cards.map((card, index) => {
          const backImg = backImages[index % backImages.length];
          return (
            <div key={card.id} className="w-72 h-[400px] perspective-1000">
              <div className="relative w-full h-full group transform transition-transform duration-700 hover:scale-105 hover:rotate-y-180 [transform-style:preserve-3d]">
              
                <div className="absolute w-full h-full backface-hidden rounded-xl shadow-xl overflow-hidden">
                  <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                </div>
             
                <div
                  className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl flex flex-col justify-center items-center p-4 text-white"
                  style={{
                    backgroundImage: `url('${backImg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
                  <p className="text-center text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="flex flex-col md:hidden items-center gap-6">
        {cards.map((card, index) => {
          const backImg = backImages[index % backImages.length];
          return <MobileCard key={card.id} card={card} backImg={backImg} />;
        })}
      </div>
    </section>
  );
};

export default TarotSection;
