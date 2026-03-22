// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Hero() {
//   const specialties = [
//     { name: "Choco Pies", icon: "🥧" },
//     { name: "Ball & Heart Bites", icon: "❤️" },
//     { name: "Classic Cakes", icon: "🎂" },
//     { name: "Brownies", icon: "🍫" },
//     { name: "Jar Cakes", icon: "🫙" },
//     { name: "Pastries", icon: "🍰" },
//     { name: "Dream Cake V1", icon: "💭" },
//     { name: "Dream Cake V2", icon: "🌟" },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % specialties.length);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [specialties.length]);

//   return (
//     <section className="relative h-screen overflow-hidden bg-[#FFF5F5] py-16 lg:py-32">
      
//       {/* --- Floating Background Elements --- */}
//       <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
//         {/* Large soft blobs */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

//         {/* Floating Icons */}
//         <span className="absolute top-20 left-[10%] text-4xl opacity-20 animate-float-slow">🧁</span>
//         <span className="absolute top-40 right-[15%] text-3xl opacity-20 animate-float-delayed">✨</span>
//         <span className="absolute bottom-20 left-[20%] text-4xl opacity-20 animate-float-delayed">🍓</span>
//         <span className="absolute bottom-40 right-[10%] text-5xl opacity-10 animate-float-slow">🍩</span>
//         <span className="absolute top-1/2 left-5 text-2xl opacity-15 animate-float-slow">💖</span>
//       </div>

//       <div className="max-w-7xl py-15 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
//         {/* Text Content */}
//         <div className="text-center md:text-left">
//           <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-pink-600 uppercase bg-pink-100 rounded-full">
//             📍 Kadachanendhal, Madurai
//           </span>

//           <h1 className="text-5xl lg:text-7xl font-extrabold text-[#5D3A3A] leading-tight">
//             Soulfull <span className="text-pink-500">Bites</span>
//           </h1>

//           <p className="mt-6 text-lg text-gray-700 max-w-lg">
//             Experience <span className="font-semibold text-pink-500 italic">"Love at First Bite"</span> with handcrafted cakes and desserts.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <Link
//               to="/categories"
//               className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg transition transform hover:-translate-y-1 font-bold text-lg text-center"
//             >
//               Explore Menu
//             </Link>

//             <a
//               href="https://wa.me/919790586747"
//               className="flex items-center justify-center gap-2 border-2 border-pink-200 text-pink-600 px-8 py-4 rounded-2xl font-bold bg-white hover:bg-pink-50 transition shadow-sm"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </div>

//         {/* Image / Logo Section */}
//         <div className="relative flex justify-center mt-12 md:mt-0">
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-linear-to-r from-pink-400 to-orange-300 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition"></div>

//             <img
//               src="/images/soulfull-bites-logo.jpg"
//               alt="Soulfull Bites Logo"
//               className="relative w-full max-w-md rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500"
//             />

//             {/* Floating Dynamic Badge */}
//             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce border border-pink-50">
//               <div className="bg-pink-100 p-2 rounded-lg text-xl">
//                 {specialties[index].icon}
//               </div>
//               <div>
//                 <p className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">
//                   Freshly Baked
//                 </p>
//                 <p className="text-sm font-black text-[#5D3A3A]">
//                   {specialties[index].name}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Hero() {
//   const specialties = [
//     { name: "Choco Pies", icon: "🥧" },
//     { name: "Ball & Heart Bites", icon: "❤️" },
//     { name: "Classic Cakes", icon: "🎂" },
//     { name: "Brownies", icon: "🍫" },
//     { name: "Jar Cakes", icon: "🫙" },
//     { name: "Pastries", icon: "🍰" },
//     { name: "Dream Cake V1", icon: "💭" },
//     { name: "Dream Cake V2", icon: "🌟" },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % specialties.length);
//     }, 1500);
//     return () => clearInterval(interval);
//   }, [specialties.length]);

//   return (
//     <section className="relative h-screen overflow-hidden bg-black py-16 lg:py-32 text-[#F5E6C8]">

//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-[#C9A227] blur-3xl opacity-10 rounded-full"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4B2E2B] blur-3xl opacity-30 rounded-full"></div>

//         {/* Floating icons */}
//         <span className="absolute top-24 left-[10%] text-4xl opacity-10 animate-float-slow">🧁</span>
//         <span className="absolute top-40 right-[15%] text-3xl opacity-10 animate-float-delayed">✨</span>
//         <span className="absolute bottom-20 left-[20%] text-4xl opacity-10 animate-float-delayed">🍓</span>
//         <span className="absolute bottom-40 right-[10%] text-5xl opacity-10 animate-float-slow">🍩</span>
//       </div>

//       <div className="max-w-7xl py-20 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

//         {/* TEXT */}
//         <div className="text-center md:text-left">

//           <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-wider uppercase text-black bg-[#C9A227] rounded-full">
//             📍 Kadachanendhal, Madurai
//           </span>

//           <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
//             Soulfull
//             <span className="block bg-gradient-to-r from-[#C9A227] to-[#F5E6C8] bg-clip-text text-transparent">
//               Bites
//             </span>
//           </h1>

//           <p className="mt-6 text-lg text-[#F5E6C8]/80 max-w-lg">
//             Experience{" "}
//             <span className="text-[#C9A227] font-semibold italic">
//               "Love at First Bite"
//             </span>{" "}
//             with handcrafted cakes and desserts made with passion.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

//             <Link
//               to="/categories"
//               className="bg-[#C9A227] hover:bg-[#d4af37] text-black px-8 py-4 rounded-2xl shadow-lg transition transform hover:-translate-y-1 font-bold text-lg text-center"
//             >
//               Explore Menu
//             </Link>

//             <a
//               href="https://wa.me/919790586747"
//               className="flex items-center justify-center gap-2 border border-[#C9A227] text-[#C9A227] px-8 py-4 rounded-2xl font-bold bg-[#1a1a1a] hover:bg-[#4B2E2B] transition shadow-sm"
//             >
//               WhatsApp Us
//             </a>

//           </div>
//         </div>

//         {/* IMAGE */}
//         <div className="relative flex justify-center mt-12 md:mt-0">

//           <div className="relative group">

//             <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A227] to-[#F5E6C8] rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition"></div>

//             <img
//               src="/images/soulfull-bites-logo.jpg"
//               alt="Soulfull Bites Logo"
//               className="relative w-full max-w-md rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500"
//             />

//             {/* Floating Badge */}
//             <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#C9A227]/30 animate-bounce">

//               <div className="bg-[#4B2E2B] p-2 rounded-lg text-xl">
//                 {specialties[index].icon}
//               </div>

//               <div>
//                 <p className="text-[10px] text-[#C9A227] font-bold uppercase tracking-wider">
//                   Freshly Baked
//                 </p>

//                 <p className="text-sm font-black text-[#F5E6C8]">
//                   {specialties[index].name}
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





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
    }, 1500);
    return () => clearInterval(interval);
  }, [specialties.length]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black text-[#F5E6C8] font-['Montserrat']">
      
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#C9A227] blur-[120px] opacity-10 rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#4B2E2B] blur-[120px] opacity-40 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* --- TEXT CONTENT --- */}
        <div className="text-center md:text-left space-y-8">
          
          <div className="space-y-4">
            <span className="inline-block px-5 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-black bg-[#C9A227] rounded-full shadow-lg">
              📍 Kadachanendhal, Madurai
            </span>

            <h1 className="text-6xl lg:text-8xl font-['Cormorant_Garamond'] font-bold leading-[0.9] italic">
              Soulfull  
              <span className="not-italic font-extrabold bg-gradient-to-r from-[#C9A227] via-[#F5E6C8] to-[#C9A227] bg-clip-text text-transparent pb-2">
                Bites
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-[#F5E6C8]/70 max-w-md font-light leading-relaxed">
            Experience 
            <span className="text-[#C9A227] font-['Cormorant_Garamond'] italic text-2xl px-2">
              "Love at First Bite"
            </span> 
            with artisanal desserts crafted for your most cherished moments.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
            <Link
              to="/categories"
              className="bg-[#C9A227] hover:bg-white text-black px-10 py-4 rounded-full transition-all duration-500 font-bold tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Explore Menu
            </Link>

            <a
              href="https://wa.me/919790586747"
              className="group flex items-center justify-center gap-3 border border-[#C9A227]/50 text-[#C9A227] px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-transparent hover:bg-[#C9A227] hover:text-black transition-all duration-500"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* --- IMAGE CONTENT --- */}
        <div className="relative flex justify-center">
          <div className="relative group">
            {/* Soft Glow behind image */}
            <div className="absolute -inset-4 bg-[#C9A227] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition duration-1000"></div>

            <img
              src="/images/soulfull-bites-logo.jpg"
              alt="Soulfull Bites Logo"
              className="relative w-full max-w-sm rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5 grayscale-[0.2] hover:grayscale-0 transition duration-700 ease-in-out"
            />

            {/* Floating Specialist Badge */}
            <div className="absolute -bottom-8 -left-8 bg-[#1a1a1a]/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-[#C9A227]/20">
              <div className="bg-[#C9A227]/10 p-3 rounded-2xl text-2xl">
                {specialties[index].icon}
              </div>
              <div className="pr-4">
                <p className="text-[9px] text-[#C9A227] font-bold uppercase tracking-[0.2em] opacity-80">
                  Signature
                </p>
                <p className="text-md font-['Cormorant_Garamond'] font-bold text-[#F5E6C8]">
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


