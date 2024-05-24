import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiPantoneFill, RiCameraLensLine, RiEditLine,RiSmartphoneFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

// const servicesList = [
//     {
//         id: 1,
//         icon: <RiGlobalFill size={65} />,
//         service_name: "Brand Identity Design",
//         service_description: "Kane gives you the blocks & kits you need to create a true website within minutes."
//     },
//     {
//         id: 2,
//         icon: <RiQuillPenLine size={65} />,
//         service_name: "Website Design",
//         service_description: "Kane gives you the blocks & kits you need to create a true website within minutes."
//     },
//     {
//         id: 3,
//         icon: <RiPantoneFill size={65} />,
//         service_name: "Application Design",
//         service_description: "Kane gives you the blocks & kits you need to create a true website within minutes."
//     },

// ]

// const servicesList = [
//     {
//         id: 1,
//         icon: <RiGlobalFill size={65} />,
//         service_name: "Full-Stack Development",
//         service_description: "Offering comprehensive web development services, from front-end to back-end, ensuring a seamless and functional user experience."
//     },
//     {
//         id: 2,
//         icon: <RiCameraLensLine size={65} />,
//         service_name: "Professional Photography",
//         service_description: "Providing high-quality photography services for portraits, events, and products to help you capture moments and showcase your brand."
//     },
//     {
//         id: 3,
//         icon: <RiEditLine size={65} />,
//         service_name: "Photo Editing & Retouching",
//         service_description: "Expert photo editing and retouching services to enhance your images, ensuring they look perfect for any purpose."
//     }
// ];

const servicesList = [
    {
        id: 1,
        icon: <RiGlobalFill size={65} />,
        service_name: "Website Development",
        service_description: "Providing end-to-end website development services, creating responsive and dynamic websites tailored to your needs."
    },
    {
        id: 2,
        icon: <RiSmartphoneFill size={65} />,
        service_name: "Mobile App Development",
        service_description: "Designing and developing user-friendly mobile applications for both Android and iOS platforms, ensuring seamless performance."
    },
    {
        id: 3,
        icon: <RiCameraLensLine size={65} />,
        service_name: "Professional Photography",
        service_description: "Offering high-quality photography services for portraits, events, and products to capture and showcase your best moments."
    }
];


const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services