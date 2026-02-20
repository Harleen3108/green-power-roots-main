import React from "react";
import { Wrench, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import rentalsImg from "@/assets/rentals.jpg";

const Rentals = () => {
  const features = ["Centrifuge & Distillation", "High-pressure tanks", "On-site setup", "Full maintenance", "Scalable units", "Pilot testing"];

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <main className="pt-24 md:pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-600 font-black uppercase text-[10px] mb-8">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 rounded-[2rem] md:rounded-[3rem] overflow-hidden h-60 md:h-[500px] shadow-xl order-1">
              <img src={rentalsImg} alt="Rentals" className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <span className="text-orange-600 font-black uppercase text-xs mb-4 block">Flexible Machinery</span>
              <h1 className="text-3xl md:text-7xl font-black text-orange-900 uppercase tracking-tighter mb-6 leading-none">Industrial <br className="hidden md:block"/> Rentals</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-orange-100 pb-3">
                    <Wrench className="text-orange-600" size={20} />
                    <span className="font-black text-orange-900 text-[10px] md:text-sm uppercase">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="w-full sm:w-auto text-center inline-block bg-orange-900 text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl">
                Rent Machinery
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};
export default Rentals;