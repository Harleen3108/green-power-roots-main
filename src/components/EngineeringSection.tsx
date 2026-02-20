import { motion } from "framer-motion";
// 🟢 IMPORT YOUR IMAGE HERE. Make sure the path is correct for your project structure.
import engineeringImage from "@/assets/engineering-plant.jpg.png";

const features = [
  { title: "99% Conversion Rate", desc: "Maximize ROI with proprietary distillation technology ensuring nearly zero waste." },
  { title: "PLC Automated Control", desc: "Smart sensors and automated logic for safe, easy, and remote industrial plant monitoring." },
  { title: "Zero Liquid Discharge", desc: "Eco-friendly design that recycles water and chemicals, meeting the strictest norms." },
  { title: "Modular Scalability", desc: "Start with 1 TPD and expand easily as your feedstock collection capacity grows." }
];

const EngineeringSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE: Technical Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#1B4332] mb-10 leading-[1.1] tracking-tighter">
            Engineered for <br />
            <span className="text-[#74C69D]">Industrial Excellence</span>
          </h2>
          <div className="space-y-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 group">
                {/* Interactive bullet points that grow on hover */}
                <div className="h-3 w-3 bg-[#74C69D] rounded-full mt-3 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <h4 className="text-2xl font-black text-[#1B4332] mb-2">{f.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Animated Plant Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glassmorphism Background Glow */}
          <div className="absolute -inset-10 bg-[#74C69D]/10 rounded-full blur-3xl" />
          
          {/* 🟢 IMAGE CONTAINER: Replaced the 99% div with the actual plant image */}
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl z-10">
            <img 
              src={engineeringImage} 
              alt="Industrial Biodiesel Plant Fabrication" 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
            />
            {/* Subtle Industrial Overlay Label */}
            <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringSection;