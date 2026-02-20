import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Ready to Start Your <span className="text-eco-gradient">Biodiesel Journey?</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
          Get in touch with our experts for a free consultation. We'll help you choose the right plant setup for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 eco-gradient text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
          <a
            href="tel:+919053571119"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-heading font-bold px-8 py-4 rounded-lg text-lg hover:bg-primary/5 transition-colors"
          >
            <Phone size={20} /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
