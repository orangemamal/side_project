import React, {useEffect, useState} from 'react';
import SectionTestimonial from "../sectionComp/SectionTestimonial";
import SectionWhyChoose from "../sectionComp/SectionWhyChoose";
import SectionTeam from "../sectionComp/SectionTeam";

export default function About() {

  const [firstScrollEvent, setFirstScrollEvent] = useState(false);
  const [secondScrollEvent, setSecondScrollEvent] = useState(false);
  const [thirdScrollEvent, setThirdScrollEvent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      console.log(currentScrollY)

      if (currentScrollY > 300) {
        setFirstScrollEvent(true)
      } else {
        setFirstScrollEvent(false)
      }

      if(currentScrollY > 1100) {
        setSecondScrollEvent(true)
      } else {
        setSecondScrollEvent(false)
      }

      if(currentScrollY > 1800) {
        setThirdScrollEvent(true)
      } else {
        setThirdScrollEvent(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <main>
      <div className={`mb40 why-choose-section animate__animated_scroll ${firstScrollEvent ? 'backInLeft' : ''}`}>
        <SectionWhyChoose />
      </div>

      <div className={`mb40 untree_co-section animate__animated_scroll ${secondScrollEvent ? 'fadeInUp' : ''}`}>
        <SectionTeam />
      </div>

      <div className={`testimonial-section animate__animated_scroll ${thirdScrollEvent ? 'rotateInDownLeft' : ''}`}>
        <SectionTestimonial />
      </div>

    </main>
  );
};
