import React from 'react'

import { RiBookLine } from "@remixicon/react"
import Title from '../ui/title'
import SlideUp from '../animations/slideUp'
import { workExperience } from '../../utlits/fackData/workExperience'
import { educationExperience } from '../../utlits/fackData/educationExperience'


const Experience = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Experience</p>
                            <h2> Professional Resume</h2>
                        </Title>
                    </div>
                </div>
                <div className="resume-items">
                    <div className="row">
                        {/*  START EXPERIENCE RESUME DESIGN AREA  */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                {
                                    workExperience.map(({ id, institute, position, years }) => <Card key={id} institute={institute} position={position} years={years} />)
                                }
                            </div>
                        </div>
                        {/*  END EXPERIENCE RESUME DESIGN AREA  */}
                        {/*  START EDUCATION RESUME DESIGN AREA  */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                {
                                    educationExperience.map(({ id, institute, position, years }) => <Card key={id} institute={institute} position={position} years={years} />)
                                }
                            </div>
                        </div>
                        {/* END EDUCATION RESUME DESIGN AREA  */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience


const Card = ({ institute, position, years }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <i><RiBookLine /></i>
                </div>
                <div className="content">
                    <span className="years">{years}</span>
                    <h4>{institute}</h4>
                    <span className="company">{position}</span>
                </div>
            </div>
        </SlideUp>
    )
}