import React from 'react';
import SectionTestimonial from "../sectionComp/SectionTestimonial";
import SectionWhyChoose from "../sectionComp/SectionWhyChoose";
import SectionTeam from "../sectionComp/SectionTeam";

export default function About() {

  return (
    <main>
      <div className="why-choose-section">
        <SectionWhyChoose />
      </div>

      <div className="untree_co-section">
        <SectionTeam />
      </div>

      <div className="testimonial-section">
        <SectionTestimonial />
      </div>

    </main>
  );
};
