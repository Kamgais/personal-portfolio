import React from 'react'
import SlideUp from '../animations/slideUp'

const Title = ({ children }) => {
    return (
        <SlideUp>
            <div className="section-title text-center wow fadeInUp delay-0-2s">
                {children}
            </div>
        </SlideUp>
    )
}

export default Title