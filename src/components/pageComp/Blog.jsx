import React from 'react';
import SectionBlog from "../sectionComp/SectionBlog";
import SectionTestimonial from "../sectionComp/SectionTestimonial";

export default function Blog() {

console.log("clicked")

  return (
    <main>
      <div className="blog-section">
        <SectionBlog />
      </div>

      <div className="testimonial-section">
        <SectionTestimonial />
      </div>
    </main>
  );
};
