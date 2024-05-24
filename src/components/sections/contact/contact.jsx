import React from 'react'
import ContactInfo from './contactInfo'
import ContactForm from './contactForm'
import SlideUp from '../../animations/slideUp'

const Contact = () => {
    return (
        <section id="contact" className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="section-title text-center wow fadeInUp delay-0-2s">
                            <p>contact</p>
                            <h2>Get in Touch with Me!</h2>
                        </div>
                    </div>
                </div>
                <SlideUp>
                    <div className="row">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default Contact