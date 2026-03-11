export default function Footer() {
  return (
    <footer className="relative bg-[#3E2723] text-white mt- pt-20 pb-10 px-6">
      
      {/* Innovative "Frosting Drip" Effect (SVG) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-12.5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF9F9"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black bg-linear-to-r from-pink-300 to-orange-200 bg-clip-text text-transparent leading-tight">
            Soulfull Bites
          </h2>
          <p className="text-gray-300 italic text-sm">
            Crafting "Love at First Bite" in every batch. From our kitchen in Madurai to your heart.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            {/* Social Icons Placeholder */}
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors cursor-pointer">📸</div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">💬</div>
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-widest text-pink-300">Visit Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Kadachanendhal,<br />
            Madurai, Tamil Nadu<br />
            <span className="text-white font-semibold">Open: 9 AM - 9 PM</span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-widest text-pink-300">Get in Touch</h3>
          <p className="text-gray-300 text-sm">Have a custom order? Call us:</p>
          <a 
            href="tel:9790586747" 
            className="inline-block text-2xl font-black text-white hover:text-pink-300 transition-colors"
          >
            +91 9790586747
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400 font-medium">
          © 2026 Soulfull Bites. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          Made with <span className="text-pink-500">❤️</span> in Madurai
        </p>
      </div>
    </footer>
  );
}