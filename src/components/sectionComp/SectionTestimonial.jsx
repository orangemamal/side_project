import React from 'react';
import Slick from "../Slick";

const SectionTestimonial = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto text-center">
                    <h2 className="section-title">고객 리뷰</h2>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="testimonial-slider-wrap text-center">
                        <div className="testimonial-slider">

                            <Slick />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTestimonial;