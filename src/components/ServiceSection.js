import React from 'react'

const ServiceSection = () => {
    return (
        <section id="about-us" className="services">
            <div className="container-fluid">
                <div className="side-img">
                    <img src="images/aside.svg" alt="" />
                </div>
                <div className="side2-img">
                    <img src="images/aside2.svg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-4 service-txt">
                            <h2>Anything you need,we’ve got you covered</h2>
                            <div className="hero-btns service-btn">
                                <a data-scroll href="#contact-us">Get in Touch</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service-box">
                                <img src="images/service-icon1.svg" alt="" />
                                {/* Service Title */}
                                <h3>Web &amp; Graphic<br />Design</h3>
                                {/* Replace Patch to Image Under */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                      tincidunt.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service-box">
                                <img src="images/service-icon2.svg" alt="" />
                                {/* Service Title */}
                                <h3>Web &amp; App<br />Development</h3>
                                {/* Service Info */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                      tincidunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection