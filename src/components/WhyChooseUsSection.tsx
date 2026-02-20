import { Award, Leaf, Cpu, PenTool, Layers, ClipboardList, HeadsetIcon, Zap, BadgeDollarSign } from "lucide-react";

const reasons = [
  
  { icon: Leaf, title: "Sustainable Energy Solutions", desc: "Our plants are designed to promote eco-friendly biofuel production, helping you reduce your environmental impact." },
  { icon: Cpu, title: "State-of-the-Art Technology", desc: "We employ advanced technology to ensure efficient and high-performance biofuel production systems." },
  { icon: PenTool, title: "Tailored Plant Designs", desc: "Customized biofuel plant solutions tailored to meet your unique business and production needs." },
  { icon: Layers, title: "Multi-Feedstock Flexibility", desc: "Our biofuel plants are compatible with various feedstocks, offering flexibility and cost savings in production." },
  { icon: ClipboardList, title: "Turnkey Project Management", desc: "From initial design to installation and operation, we provide complete end-to-end project management." },
  { icon: HeadsetIcon, title: "Reliable After-Sales Support", desc: "Our dedicated support team ensures your plant operates efficiently, with ongoing maintenance and service." },
  { icon: Zap, title: "Fast Project Execution", desc: "Custom-designed distillation systems for a variety of industrial uses." },
  { icon: BadgeDollarSign, title: "Cost-Effective Solutions", desc: "Our optimized processes ensure cost-efficient production while maximizing your return on investment." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-eco-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover what sets Rameshwar Enterprises apart as a leader in biodiesel plant manufacturing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 eco-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
