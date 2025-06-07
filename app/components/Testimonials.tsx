import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "ROMA has been an incredible partner in our digital transformation journey. Their expertise and dedication have helped us achieve remarkable results.",
      name: "",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The team at ROMA delivered a custom software solution that perfectly fits our business needs. Highly recommended!.",
      name: "",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "ROMA's innovative approach and commitment to quality have made them our go-to software development partner.",
      name: "",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-7xl p-4 mx-auto my-10 lg:my-40">
      <h1 className="text-4xl md:text-7xl font-bold mb-10">
        What Our Clients Say
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
