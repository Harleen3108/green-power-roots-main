import { motion, Variants } from "framer-motion";
import { Droplets, Trash2, Leaf, FlaskConical } from "lucide-react";

const feedstocks = [
  { icon: Droplets, title: "Used Cooking Oil (UCO)", desc: "Transform waste oil from hotels and industrial kitchens into high-grade biodiesel." },
  { icon: Trash2, title: "Acid Oil / Sludge", desc: "Process low-cost, high-FFA industrial waste into usable green energy sources." },
  { icon: Leaf, title: "Non-Edible Oils", desc: "Convert Jatropha, Neem, and Pongamia oils into sustainable, carbon-neutral fuel." },
  { icon: FlaskConical, title: "Animal Fats", desc: "Efficiently process tallow and other animal by-products with nearly zero waste." }
];

const cardVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const FeedstockSection = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#1B4332] mb-4 tracking-tighter"
          >
            Multi-Feedstock <span className="text-[#74C69D]">Flexibility</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our plants are engineered to handle a wide variety of raw materials, 
            ensuring your business stays profitable regardless of market supply.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {feedstocks.map((item, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={cardVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-[#1B4332]/5 border border-transparent hover:border-[#74C69D]/30 transition-all text-center"
            >
              <div className="w-16 h-16 bg-[#F0F4F0] text-[#1B4332] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1B4332] group-hover:text-[#74C69D] transition-colors">
                <item.icon size={30} />
              </div>
              <h3 className="text-xl font-black text-[#1B4332] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedstockSection;