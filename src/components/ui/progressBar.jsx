import React, { useEffect, useState } from 'react'
import arrow_top from "../../assets/images/double-arrow-top.png"
const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            const scrollableHeight = documentHeight - windowHeight;
            const scrollPercentage = (scrollPosition / scrollableHeight) * 100;
            setScrollPercentage(scrollPercentage);
            setShowBackToTop(scrollPosition > 350);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className=' progress-area'>
            <i className='progress-arrow' style={showBackToTop?{opacity:"100", visibility:"visible"}:{}}>
                <img src={arrow_top} alt="arrow" />
            </i>
            <div
                onClick={scrollToTop}
                className={`${showBackToTop ? "active-progress" : ""} progress-wrap cursor-pointer`}
            >
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"

                    strokeWidth={5}
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            strokeDasharray: "307.919, 307.919",
                            strokeDashoffset: 307.919 - (scrollPercentage * 307.919) / 100,
                        }}
                    ></path>
                </svg>

            </div>
        </div>

    )
}

export default ProgressBar