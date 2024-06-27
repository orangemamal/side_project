import React, {useEffect, useState} from 'react';
import SectionBlog from "../sectionComp/SectionBlog";
import SectionTestimonial from "../sectionComp/SectionTestimonial";

export default function Blog() {

  const [firstScrollEvent, setFirstScrollEvent] = useState(false);
  const [secondScrollEvent, setSecondScrollEvent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      console.log(currentScrollY)

      if (currentScrollY > 300) {
        setFirstScrollEvent(true)
      } else {
        setFirstScrollEvent(false)
      }

      if(currentScrollY > 900) {
        setSecondScrollEvent(true)
      } else {
        setSecondScrollEvent(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <main>
      <div className={`mb40 blog-section animate__animated_scroll ${firstScrollEvent ? 'fadeInUp' : ''}`}>
        <SectionBlog />
      </div>

      <div className={`testimonial-section animate__animated_scroll ${secondScrollEvent ? 'rotateInDownLeft' : ''}`}>
        <SectionTestimonial />
      </div>
    </main>
  );
};
