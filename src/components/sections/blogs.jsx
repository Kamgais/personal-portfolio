import React from 'react'
import { RiBookReadLine } from '@remixicon/react'
import Title from '../ui/title'

import ZoomIn from '../animations/zoomIn'
import { blodData } from '../../utlits/fackData/blogsData'


const Blogs = () => {
    return (
        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>blog</p>
                            <h2>Latest Blog</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {blodData.map(({ date, descripation, id, src, title }) => <Card key={id} date={date} src={src} descripation={descripation} title={title} id={id} />)}
                </div>
            </div>
        </section>
    )
}

export default Blogs


const Card = ({ date, src, title, descripation, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <ZoomIn id={id}>
                <div className="blog-item">
                    <div className="image">
                        <img src={src} alt="Blog" />
                    </div>
                    <div className="content">
                        <div className="blog-meta mt-15">
                            <a className="date" href="#"><i className="far fa-calendar-alt"></i>{date}</a>
                        </div>
                        <h5>
                            <a href="#">{title}</a>
                        </h5>
                        <p>{descripation}</p>
                        <hr />
                        <a href="#" className="theme-btn">Read More<i><RiBookReadLine size={15} /></i></a>
                    </div>
                </div>
            </ZoomIn>
        </div>
    )
}