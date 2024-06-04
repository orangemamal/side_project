import React from 'react';
import SectionTestimonial from "../sectionComp/SectionTestimonial";
import SectionWhyChoose from "../sectionComp/SectionWhyChoose";

export default function About() {

  return (
    <main>
      <div className="why-choose-section">
        <SectionWhyChoose />
      </div>

      <div className="untree_co-section">

      </div>

      <div className="testimonial-section">
        <SectionTestimonial />
      </div>

    </main>
  );
};
