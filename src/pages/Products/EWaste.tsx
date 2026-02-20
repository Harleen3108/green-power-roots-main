import React from "react";
import { Recycle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import eWasteImg from "@/assets/e-waste.jpg";

const EWaste = () => {
  const features = ["Metal recovery (Gold/Copper)", "Pollution-free processing", "PCB shredding", "Govt-compliant standards", "Circuit board processing", "Turnkey setups"];

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <main className="pt-24 md:pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] mb-8 hover:gap-4 transition-all">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Responsive Image */}
            <div className="w-full lg:w-1/2 rounded-[2rem] md:rounded-[3rem] overflow-hidden h-60 md:h-[500px] shadow-xl order-1 lg:order-2">
              <img src={eWasteImg} alt="E-waste" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <span className="text-blue-600 font-black uppercase text-xs mb-4 block">Recycling Solutions</span>
              <h1 className="text-3xl md:text-7xl font-black text-blue-900 uppercase tracking-tighter mb-6 leading-none">E-Waste <br className="hidden md:block"/> Recycling</h1>
              <div className="space-y-3 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <CheckCircle className="text-blue-600 shrink-0" size={18} />
                    <span className="font-bold text-blue-900 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="w-full sm:w-auto text-center inline-block bg-blue-900 text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};
export default EWaste;