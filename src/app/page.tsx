export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero relative h-[75vh] flex items-center justify-center text-center overflow-hidden rounded-b-[120px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover new z-0"
        >
          <source src="/image/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 max-w-[90%] px-5 text-white">
          <h2 className="text-5xl md:text-6xl mb-4 drop-shadow-lg">
            Welcome to Astroger
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Your Gateway to the Stars – Chat, Connect & Explore
          </p>
          <a
            href="#about"
            className="inline-block px-7 py-3 bg-[#d9914b] font-bold rounded-full shadow-md hover:bg-[#b77a3a] transition-all"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Section with curved top */}
      <section
        id="about"
        className="bg-[#fffaf3] shadow-md max-w-[1000px] mx-auto text-center py-20 px-5 mt-[-80px] rounded-t-[120px] relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#b77a3a]">
          About Astroger
        </h2>
        <p className="text-[#555] max-w-[700px] mx-auto">
          Astroger is a platform designed for deep connections through chat,
          video calls, and celestial guidance. Join us to experience something
          truly cosmic.
        </p>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto py-20 px-5"
      >
        <div className="bg-[#fffaf3] rounded-[50px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-4 text-[#d9914b]">
            Video Calls
          </h3>
          <p>Seamless and secure video calling with modern UI.</p>
        </div>
        <div className="bg-[#fffaf3] rounded-[50px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-4 text-[#d9914b]">
            Astro Guidance
          </h3>
          <p>Get personalized astrological insights instantly.</p>
        </div>
        <div className="bg-[#fffaf3] rounded-[50px] p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-4 text-[#d9914b]">
            Chat Anytime
          </h3>
          <p>Connect with people anytime, anywhere in the world.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f5e3d0] py-20 px-5">
        <h2 className="text-3xl font-semibold mb-10 text-center text-[#b77a3a]">
          What Our Users Say
        </h2>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[50px] p-8 shadow-md text-center">
            <p>"Astroger helped me connect with people in a whole new way!"</p>
            <span className="block mt-4 font-semibold text-[#d9914b]">- Priya</span>
          </div>
          <div className="bg-white rounded-[50px] p-8 shadow-md text-center">
            <p>"The video calls are so smooth and reliable."</p>
            <span className="block mt-4 font-semibold text-[#d9914b]">- Rohit</span>
          </div>
          <div className="bg-white rounded-[50px] p-8 shadow-md text-center">
            <p>"Love the astro guidance feature — very accurate!"</p>
            <span className="block mt-4 font-semibold text-[#d9914b]">- Ananya</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#d9914b] text-white py-20 px-5 rounded-t-[80px] text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Explore the Stars?
        </h2>
        <p className="mb-6 max-w-[700px] mx-auto">
          Join Astroger today and start connecting with people around the world while exploring celestial guidance.
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-4 bg-[#b77a3a] font-bold rounded-full shadow-md hover:bg-[#995f2f] transition-all"
        >
          Get Started
        </a>
      </section>
    </>
  );
}
