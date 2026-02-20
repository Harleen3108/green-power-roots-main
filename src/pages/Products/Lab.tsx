import React from "react";
import { FlaskConical, Beaker, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import labImg from "@/assets/lab-setup.jpg";

const Lab = () => {
  const features = ["ASTM/EN equipment", "Yield analysis", "Titration setups", "Certified ventilation", "Staff training", "Quality control"];

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <main className="pt-24 md:pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-600 font-black uppercase text-[10px] mb-8">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="bg-purple-900 rounded-[2rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="w-full lg:w-1/2 p-8 md:p-16 text-white order-2 lg:order-1">
              <h1 className="text-3xl md:text-7xl font-black uppercase mb-8 leading-none">Research <br className="hidden md:block"/> & Lab</h1>
              <div className="space-y-4 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4 items-center border-b border-purple-800 pb-4">
                    <Beaker className="text-[#74C69D]" size={20} />
                    <span className="font-bold text-sm md:text-lg">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="w-full sm:w-auto text-center inline-block bg-[#74C69D] text-purple-900 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl">
                Consult Experts
              </Link>
            </div>
            <div className="w-full lg:w-1/2 h-60 md:h-auto min-h-[300px] relative order-1 lg:order-2">
              <img src={labImg} alt="Lab" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};
export default Lab;