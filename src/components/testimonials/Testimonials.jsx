import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
    return (
        <section className='testimonial container section' id='testimonials'>
            <h2 className='section__title'>Some of my clients</h2>

            <Swiper
                className='testimonial__container'
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className='testimonial__card' key={id}>
                            <img
                                src={image}
                                alt=''
                                className='testimonial__img'
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
