import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter text-white">
              RAMESHWAR <span className="text-[#74C69D]">ENTERPRISES</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of high-performance biodiesel processing plants. 
              Committed to sustainable energy and engineering excellence for a greener future.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="md:pl-10">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#74C69D]">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3"><Phone size={16} className="text-[#74C69D]" /> +91 90531 93317</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-[#74C69D]" /> rameshwarenterprisessolution@gmail.com</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-[#74C69D]" /> 2ND FLOOR BLK-B PKT-3 SEC-6 ROHINI CITY DELHI 110085 INDiA </li>
            </ul>
          </div>

          {/* Column 3: Legal Compliance */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#74C69D]">Legal</h3>
            <div className="bg-black/20 p-4 rounded-xl border border-[#74C69D]/20">
              <p className="text-xs text-[#74C69D] font-bold uppercase mb-1">GST Registration No.</p>
              <p className="text-sm font-mono tracking-widest text-white">06ABKFR9829B1ZY</p>
            </div>
          </div>
        </div>

        {/* --- THE BOSS'S LINE: CENTERED IN-BETWEEN --- */}
        <div className="border-t border-b border-white/10 py-6 mb-8 text-center">
          <p className="text-lg md:text-xl font-medium italic text-[#74C69D] tracking-wide">
            "End-to-end solutions from raw material to selling."
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="text-center text-xs text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Rameshwar Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
