import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine , RiInstagramLine} from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpeg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Cyril Kamgais</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href=""><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href="https://www.instagram.com/cyril.codes/"><i><RiInstagramLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/cyril-kamgais-totso-a86491207/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/Kamgais"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Cyril Kamgais, <span>Software Developer</span> and Photographer
                                    Based in Germany.
                                </h2>
                                <div className="hero-btns">
                                    <a href="#" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Frontend Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Backend Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Devops</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Web Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i>Photography</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i>Videography</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About