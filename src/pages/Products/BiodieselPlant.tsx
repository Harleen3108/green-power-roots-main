import React from "react";
import { motion } from "framer-motion"; // 🟢 Fixed import
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import productImage from "@/assets/product-biodiesel-plant.jpg";

const BiodieselPlant = () => {
  const features = [
    "High-efficiency transesterification process",
    "Automated PLC-based operation controls",
    "Modular design for easy installation",
    "Produces IS-standard quality fuel",
    "Low maintenance SS/MS construction",
    "Capacity from 500 to 50,000 L/day",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <main className="pt-24 md:pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          
          <Link to="/" className="inline-flex items-center gap-2 text-[#74C69D] font-black uppercase text-[10px] mb-6 md:mb-10 hover:gap-4 transition-all">
            <ArrowLeft size={16} /> Back to home
          </Link>

          {/* 🟢 Mobile: Stacked (Image First) | Desktop: Side-by-Side */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Image Banner: Properly scaled for mobile */}
            <div className="w-full lg:w-1/2 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl h-60 md:h-[500px] lg:h-[600px] order-1">
              <img src={productImage} alt="Biodiesel Plant" className="w-full h-full object-cover" />
            </div>

            <div className="w-full lg:w-1/2 order-2">
              <h1 className="text-3xl md:text-7xl font-black text-[#1B4332] uppercase tracking-tighter mb-6 leading-none">
                Biodiesel Plant
              </h1>
              <p className="text-gray-500 text-sm md:text-xl leading-relaxed mb-8 border-l-4 border-[#74C69D] pl-4 italic">
                Converting vegetable oils into premium fuel via advanced technology.
              </p>

              {/* 🟢 Features Grid: 1 col on mobile | 2 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle className="text-[#74C69D] shrink-0 mt-0.5" size={18} />
                    <span className="text-[#1B4332] font-bold text-xs md:text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="w-full sm:w-auto text-center inline-block bg-[#1B4332] text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#74C69D] transition-all shadow-xl">
                Get Quotation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BiodieselPlant;