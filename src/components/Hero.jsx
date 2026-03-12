import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
  const specialties = [
    { name: "Choco Pies", icon: "🥧" },
    { name: "Ball & Heart Bites", icon: "❤️" },
    { name: "Classic Cakes", icon: "🎂" },
    { name: "Brownies", icon: "🍫" },
    { name: "Jar Cakes", icon: "🫙" },
    { name: "Pastries", icon: "🍰" },
    { name: "Dream Cake V1", icon: "💭" },
    { name: "Dream Cake V2", icon: "🌟" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [specialties.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-[#FFF5F5] py-16 lg:py-32">
      
      {/* --- Floating Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Large soft blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Floating Icons */}
        <span className="absolute top-20 left-[10%] text-4xl opacity-20 animate-float-slow">🧁</span>
        <span className="absolute top-40 right-[15%] text-3xl opacity-20 animate-float-delayed">✨</span>
        <span className="absolute bottom-20 left-[20%] text-4xl opacity-20 animate-float-delayed">🍓</span>
        <span className="absolute bottom-40 right-[10%] text-5xl opacity-10 animate-float-slow">🍩</span>
        <span className="absolute top-1/2 left-5 text-2xl opacity-15 animate-float-slow">💖</span>
      </div>

      <div className="max-w-7xl py-15 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-pink-600 uppercase bg-pink-100 rounded-full">
            📍 Kadachanendhal, Madurai
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#5D3A3A] leading-tight">
            Soulfull <span className="text-pink-500">Bites</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            Experience <span className="font-semibold text-pink-500 italic">"Love at First Bite"</span> with handcrafted cakes and desserts.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/categories"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg transition transform hover:-translate-y-1 font-bold text-lg text-center"
            >
              Explore Menu
            </Link>

            <a
              href="https://wa.me/919790586747"
              className="flex items-center justify-center gap-2 border-2 border-pink-200 text-pink-600 px-8 py-4 rounded-2xl font-bold bg-white hover:bg-pink-50 transition shadow-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Image / Logo Section */}
        <div className="relative flex justify-center mt-12 md:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-pink-400 to-orange-300 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition"></div>

            <img
              src="/images/soulfull-bites-logo.jpg"
              alt="Soulfull Bites Logo"
              className="relative w-full max-w-md rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500"
            />

            {/* Floating Dynamic Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce border border-pink-50">
              <div className="bg-pink-100 p-2 rounded-lg text-xl">
                {specialties[index].icon}
              </div>
              <div>
                <p className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">
                  Freshly Baked
                </p>
                <p className="text-sm font-black text-[#5D3A3A]">
                  {specialties[index].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}