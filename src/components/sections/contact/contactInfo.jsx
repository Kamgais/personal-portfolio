import React from 'react'
import { RiMapPinLine, RiPhoneLine, RiMailLine } from '@remixicon/react'


const ContactInfo = () => {
    return (
        <div className="col-lg-4">
            <div className="contact-content-part  wow fadeInUp delay-0-2s">

                <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                    <div className="contact-icon">
                        <i><RiMapPinLine size={20} /></i>
                    </div>
                    <h2>my location:</h2>
                    <p>Berlin, Germany</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                    <div className="contact-icon">
                        <i><RiPhoneLine size={20} /></i>
                    </div>
                    <h2>contact number:</h2>
                    <p>+49 17668484380</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                    <div className="contact-icon">
                        <i><RiMailLine size={20} /></i>
                    </div>
                    <h2>Email me:</h2>
                    <p>cyrilkamgais1203@gmail.com</p>
                </div>

            </div>
        </div>
    )
}

export default ContactInfo