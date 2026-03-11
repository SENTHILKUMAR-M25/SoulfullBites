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

  // Cycle through items every 3 seconds (matching a slow bounce)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % specialties.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [specialties.length]);

  return (
    <section className="relative  overflow-hidden bg-[#FFF5F5] py-16 lg:py-34">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-64 h-4 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-pink-600 uppercase bg-pink-100 rounded-full">
            📍 Kadachanendhal, Madurai
          </span>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#5D3A3A] leading-tight">
            Soulfull <span className="text-pink-500">Bites</span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-lg">
            Experience <span className="font-semibold text-pink-500 italic">"Love at First Bite"</span> with our handcrafted 
            cakes, fudgy brownies, and artisanal pastries.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/categories" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl shadow-[0_10px_20px_rgba(236,72,153,0.3)] transition-all transform hover:-translate-y-1 font-bold text-lg text-center"
            >
              Explore Menu
            </Link>
            <a 
              href="https://wa.me/919790586747" 
              className="flex items-center justify-center gap-2 border-2 border-pink-200 text-pink-600 px-8 py-4 rounded-2xl font-bold bg-white hover:bg-pink-50 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Logo/Image Container with Dynamic Floating Badge */}
        <div className="relative flex justify-center mt-12 md:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-pink-400 to-orange-300 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <img
              src="/images/soulfull-bites-logo.jpg" 
              alt="Soulfull Bites Logo"
              className="relative w-full max-w-md rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            
            {/* INNOVATIVE DYNAMIC BADGE */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce transition-all duration-500">
              <div className="bg-pink-100 p-2 rounded-lg text-xl">
                {specialties[index].icon}
              </div>
              <div className="min-w-30">
                <p className="text-[10px] text-pink-400 font-bold uppercase tracking-tighter">Freshly Baked</p>
                <p className="text-sm font-black text-[#5D3A3A] transition-all duration-500">
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