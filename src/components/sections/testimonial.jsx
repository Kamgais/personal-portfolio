import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react'
import Title from '../ui/title';
import SlideUp from '../animations/slideUp';
import { testimonialData } from '../../utlits/fackData/testimonialData';


const Testimonial = () => {
    const slider = useRef(null);

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    };
    return (
        <section className="testimonials-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Testinomials</p>
                            <h2>What clients say!</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonials-wrap">
                            <Slider ref={slider} {...settings}>
                                {
                                    testimonialData.map(({ id, name, position, review, src }) => {
                                        return (
                                            <SlideUp key={id}>
                                                <div className="testimonial-item">
                                                    <div className="author">
                                                        <img src={src} alt="Author" />
                                                    </div>
                                                    <div className="text">{review}</div>
                                                    <div className="testi-des">
                                                        <h5>{name}</h5>
                                                        <span>{position}</span>
                                                    </div>
                                                </div>
                                            </SlideUp>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                        <SlideUp>
                            <div className="slider-arrows text-center pt-40" style={{ paddingTop: "40px" }}>
                                <button className="testimonial-prev" onClick={() => slider?.current?.slickPrev()}> <i><RiArrowLeftSLine /></i></button>
                                <button className="testimonial-next" onClick={() => slider?.current?.slickNext()}> <i><RiArrowRightSLine /></i></button>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial

