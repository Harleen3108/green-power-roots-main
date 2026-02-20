import React from "react";

const YouTubeSection = () => {
  return (
    <section className="py-20 bg-[#F0F4F0]">
      <div className="container mx-auto px-4 text-center">
        <div className="section-marker mb-6 inline-block">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B4332] mb-4">
            See Our Plant in Action
          </h2>
        </div>
        
        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Watch how our biodiesel plants operate and deliver efficient, sustainable fuel production. <br />
          <span className="font-bold text-[#2D6A4F]">"End-to-end solutions from raw material to selling."</span>
        </p>

        {/* Video Container with Industrial Green Border */}
        <div className="max-w-2xl mx-auto aspect-[9/16] md:aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1B4332]/20 ring-4 ring-[#74C69D]/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/D0bTmWeMeWE?rel=0&modestbranding=1"
            title="Rameshwar Enterprises - Biodiesel Plant Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="text-xs text-gray-500 mt-6 uppercase tracking-widest">
          Rameshwar Enterprises | GST:06ABKFR9829B1ZY
        </p>
      </div>
    </section>
  );
};

export default YouTubeSection;