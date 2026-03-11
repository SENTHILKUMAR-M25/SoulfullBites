import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "", address: "", deliveryDate: "", referredBy: "", method: "pickup", pickupTime: ""
  });

  const deliveryCharge = "Delivery Charge will be calculated by the baker";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-pink-100/50 p-8 border border-pink-50 sticky top-24">
      <h2 className="text-2xl font-black text-[#5D3A3A] mb-6">Delivery Details</h2>

      <form onSubmit={(e) => { e.preventDefault(); /* submit logic */ }} className="space-y-4">
        
        {/* Input Field Design */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase ml-2">Customer Name</label>
          <input 
            type="text" name="name" required onChange={handleChange}
            className="w-full bg-pink-50/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-pink-400 transition-all outline-none" 
            placeholder="Your Name"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase ml-2">Delivery Address</label>
          <textarea 
            name="address" required onChange={handleChange} rows="2"
            className="w-full bg-pink-50/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-pink-400 transition-all outline-none"
            placeholder="Full Address in Madurai"
          />
        </div>

        {/* Delivery Method Segmented Control */}
        <div className="bg-gray-100 p-1 rounded-2xl flex relative">
          <button
            type="button"
            onClick={() => setFormData({...formData, method: 'pickup'})}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${formData.method === 'pickup' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500'}`}
          >
            🏠 Pickup
          </button>
          <button
            type="button"
            onClick={() => setFormData({...formData, method: 'delivery'})}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${formData.method === 'delivery' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500'}`}
          >
            🛵 Delivery
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-2">Date</label>
            <input type="date" name="deliveryDate" required onChange={handleChange} className="w-full bg-pink-50/50 border-none rounded-2xl p-4 text-sm" />
          </div>
          {formData.method === "pickup" && (
            <div className="space-y-1 animate-fadeIn">
              <label className="text-xs font-bold text-gray-400 uppercase ml-2">Time</label>
              <input type="time" name="pickupTime" required onChange={handleChange} className="w-full bg-pink-50/50 border-none rounded-2xl p-4 text-sm" />
            </div>
          )}
        </div>

        {formData.method === "delivery" && (
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-orange-700 text-xs font-medium">
            ✨ {deliveryCharge}
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-3xl font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-green-100"
          >
            <span className="text-2xl">💬</span>
            Place WhatsApp Order
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
            No payment required right now
          </p>
        </div>
      </form>
    </div>
  );
}