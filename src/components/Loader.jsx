// import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";

// export default function Loader({ onFinish }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     // Sync progress state for the percentage text
//     const interval = setInterval(() => {
//       setProgress((prev) => (prev < 100 ? prev + 1 : 100));
//     }, 20);

//     const timer = setTimeout(() => {
//       onFinish();
//     }, 2500);

//     return () => {
//       clearTimeout(timer);
//       clearInterval(interval);
//     };
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FFF9F5] z-100">
      
//       {/* Container for Logo + Progress Ring */}
//       <div className="relative flex items-center justify-center">
        
//         {/* Animated SVG Ring (The "Icing" effect) */}
//         <svg className="w-64 h-64 transform -rotate-90">
//           <circle
//             cx="128"
//             cy="128"
//             r="110"
//             stroke="currentColor"
//             strokeWidth="4"
//             fill="transparent"
//             className="text-orange-100"
//           />
//           <circle
//             cx="128"
//             cy="128"
//             r="110"
//             stroke="currentColor"
//             strokeWidth="4"
//             fill="transparent"
//             strokeDasharray="700"
//             className="text-pink-500 animate-draw"
//             style={{ strokeLinecap: "round" }}
//           />
//         </svg>

//         {/* Logo in the Center */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <img
//             src={logo}
//             alt="Soulfull Bites"
//             className="w-40 object-contain animate-subtle-zoom transition-all duration-1000"
//           />
//         </div>
//       </div>

//       {/* Progress Info */}
//       <div className="mt-12 text-center">
//         <h1 className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
//           Soulfull Bites
//         </h1>
        
//         {/* The "Loading" percentage/status */}
//         <div className="mt-2 h-6 overflow-hidden">
//           <p className="text-pink-500 font-serif italic text-xl animate-pulse">
//             Mixing the batter...
//           </p>
//         </div>

//         <span className="mt-4 block text-xs font-mono text-slate-300">
//           {progress}%
//         </span>
//       </div>

//       {/* Background Decorative Elements */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
//     </div>
//   );
// }





import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  const messages = [
    "Preparing the oven...",
    "Mixing the batter...",
    "Baking fresh cakes...",
    "Adding the frosting...",
    "Almost ready..."
  ];

  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 500);

    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">

      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#C9A227] opacity-10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#4B2E2B] opacity-30 blur-3xl rounded-full animate-pulse"></div>

      {/* Logo + Progress Ring */}
      <div className="relative flex items-center justify-center">

        <svg className="w-64 h-64 -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="110"
            stroke="#4B2E2B"
            strokeWidth="5"
            fill="transparent"
          />

          <circle
            cx="128"
            cy="128"
            r="110"
            stroke="#C9A227"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray="700"
            className="animate-draw"
            style={{ strokeLinecap: "round" }}
          />
        </svg>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Soulfull Bites"
            className="w-40 object-contain animate-pulse"
          />
        </div>

      </div>

      {/* Loading Info */}
      <div className="mt-12 text-center">

        <h1 className="text-sm font-bold tracking-[0.3em] text-[#C9A227] uppercase">
          Soulfull Bites
        </h1>

        <div className="mt-3 h-6 overflow-hidden">
          <p className="text-[#F5E6C8] italic text-xl animate-pulse">
            {messages[msgIndex]}
          </p>
        </div>

        <span className="mt-4 block text-xs font-mono text-[#F5E6C8]/60">
          {progress}%
        </span>

      </div>
    </div>
  );
}