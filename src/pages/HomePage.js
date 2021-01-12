import React from 'react'

import Header from '../components/Header'

const HomePage = () => {
    return (
        <div>
           {/* <WhatsAppChat /> */}
           <Header />
            {/* SERVICES SECTION */}
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
            {/* ABOUT SECTION */}
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-6">
                            <img src="images/aboutimg.svg" alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-lg-6">
                            <h5>OUR COMPANY</h5>
                            <h2>Some Fine<br />Words About Us</h2>
                            {/* Replace About Us Text Under */}
                            <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                            tincidunt.Vestibulum ac diam sit amet.Quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                  tincidunt.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* PORTFOLIO SECTION */}
            <section id="portfolio" className="portfolio">
                <div className="container-fluid">
                    <div className="portfolio-aside">
                        <img src="images/aside3.svg" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>See some of our<br />Creative work.</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-4 work-box">
                                <div className="photobox photobox_type10">
                                    <div className="photobox__previewbox">
                                        {/* Replace Patch to Image Under */}
                                        <img src="images/1.png" className="photobox__preview" alt="Preview" />
                                        {/* Replace Image Title Under */}
                                        <span className="photobox__label">Awesome Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 work-box">
                                <div className="photobox photobox_type10">
                                    <div className="photobox__previewbox">
                                        {/* Replace Patch to Image Under */}
                                        <img src="images/2.png" className="photobox__preview" alt="Preview" />
                                        {/* Replace Image Title Under */}
                                        <span className="photobox__label">Awesome Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 work-box">
                                <div className="photobox photobox_type10">
                                    <div className="photobox__previewbox">
                                        {/* Replace Patch to Image Under */}
                                        <img src="images/3.png" className="photobox__preview" alt="Preview" />
                                        {/* Replace Image Title Under */}
                                        <span className="photobox__label">Awesome Work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-4 work-box">
                                <div className="photobox photobox_type10">
                                    <div className="photobox__previewbox">
                                        {/* Replace Patch to Image Under */}
                                        <img src="images/4.png" className="photobox__preview" alt="Preview" />
                                        {/* Replace Image Title Under */}
                                        <span className="photobox__label">Awesome Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 work-box">
                                <div className="photobox photobox_type10">
                                    <div className="photobox__previewbox">
                                        {/* Replace Patch to Image Under */}
                                        <img src="images/5.png" className="photobox__preview" alt="Preview" />
                                        {/* Replace Image Title Under */}
                                        <span className="photobox__label">Awesome Work</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 work-box">
                                <div className="photobox photobox_type10">
                                    <div className="photobox__previewbox">
                                        {/* Replace Patch to Image Under */}
                                        <img src="images/6.png" className="photobox__preview" alt="Preview" />
                                        {/* Replace Image Title Under */}
                                        <span className="photobox__label">Awesome Work</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Hidden Images From Portfolio */}
                        <div id="hiden-gallery" className="hide">
                            <div className="row">
                                <div className="col-12 col-lg-4 work-box">
                                    <div className="photobox photobox_type10">
                                        <div className="photobox__previewbox">
                                            {/* Replace Patch to Image Under */}
                                            <img src="images/5.png" className="photobox__preview" alt="Preview" />
                                            {/* Replace Image Title Under */}
                                            <span className="photobox__label">Awesome Work</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 work-box">
                                    <div className="photobox photobox_type10">
                                        <div className="photobox__previewbox">
                                            {/* Replace Patch to Image Under */}
                                            <img src="images/3.png" className="photobox__preview" alt="Preview" />
                                            {/* Replace Image Title Under */}
                                            <span className="photobox__label">Awesome Work</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 work-box">
                                    <div className="photobox photobox_type10">
                                        <div className="photobox__previewbox">
                                            {/* Replace Patch to Image Under */}
                                            <img src="images/1.png" className="photobox__preview" alt="Preview" />
                                            {/* Replace Image Title Under */}
                                            <span className="photobox__label">Awesome Work</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 more-btn">
                                {/* Show Me More/Less Button */}
                                <a className="more-btn-inside">Show More.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* BLOG SECTION */}
            <section id="blog" className="blog">
                <div className="container-fluid">
                    <div className="blog-aside">
                        <img src="images/aside4.svg" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h5>BLOG STORIES</h5>
                                <h2>Check Our News</h2>
                            </div>
                        </div>
                        <div id="blog-drag" className="row blog-slider">
                            <div className="col-12 col-lg-4 blog-box blog-first">
                                {/* Blog Post Title */}
                                <h6>NEW ADVENTURE</h6>
                                {/* Blog Post Date */}
                                <p>17 March 2019</p>
                                {/* Blog Post */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
                  </p>
                            </div>
                            <div className="col-12 col-lg-4 blog-box">
                                {/* Blog Post Title */}
                                <h6>NEW ADVENTURE</h6>
                                {/* Blog Post Date */}
                                <p>17 March 2019</p>
                                {/* Blog Post */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
                  </p>
                            </div>
                            <div className="col-12 col-lg-4 blog-box">
                                {/* Blog Post Title */}
                                <h6>NEW ADVENTURE</h6>
                                {/* Blog Post Date */}
                                <p>17 March 2019</p>
                                {/* Blog Post */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
                  </p>
                            </div>
                            {/* Blog Section to be showed on Drag  */}
                            <div className="col-12 col-lg-4 blog-box hiden-blog hide-blog">
                                {/* Blog Post Title */}
                                <h6>NEW ADVENTURE</h6>
                                {/* Blog Post Date */}
                                <p>17 March 2019</p>
                                {/* Blog Post */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
                  </p>
                            </div>
                            <div className="col-12 col-lg-4 blog-box hiden-blog  hide-blog">
                                {/* Blog Post Title */}
                                <h6>NEW ADVENTURE</h6>
                                {/* Blog Post Date */}
                                <p>17 March 2019</p>
                                {/* Blog Post */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
                  </p>
                            </div>
                            <div className="col-12 col-lg-4 blog-box hiden-blog  hide-blog">
                                {/* Blog Post Title */}
                                <h6>NEW ADVENTURE</h6>
                                {/* Blog Post Date */}
                                <p>17 March 2019</p>
                                {/* Blog Post */}
                                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
                  </p>
                            </div>
                        </div>
                        {/* Blog Button to Show More or Less on Mobile&Tablet View  */}
                        <button className="hide-me" id="blog-btn">Show More Stories</button>
                    </div>
                </div>
            </section>
            {/* CONTACT SECTION */}
            <section id="contact-us" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>CONTACT US</h5>
                            <h2>Get in Touch</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 email">
                            <input placeholder="Your email" type="email" id="email" pattern=".+@globex.com" size={30} required />
                        </div>
                        <div className="col-12 col-lg-6 email">
                            <input placeholder="Subject" type="subject" id="subject" size={30} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 message">
                            <textarea id="message" name="message" rows={5} cols={1} defaultValue={"Message here..."} />
                        </div>
                        <div className="col-12">
                            <div className="hero-btns contact-btn">
                                {/* Send Message Btn */}
                                <a href="#">Send Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FOOTER SECTION */}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>BY</h5>
                            <h3>DIGITAL BUSINESS</h3>
                            <ul className="contact-nav">
                                <li><a data-scroll href="#home">Home</a></li>
                                <li><a data-scroll href="#about-us">Quem Somos</a></li>
                                <li><a data-scroll href="#portfolio">Portifólio</a></li>
                                <li><a data-scroll href="#blog">Blog</a></li>
                                <li><a data-scroll href="#contact-us">Contato</a></li>
                            </ul>
                            <h6>© 2019 - Doob,All Right Reserved</h6>
                            <ul className="social">
                                <li><a href="#"><i className="icofont-facebook" /></a></li>
                                <li><a href="#"><i className="icofont-twitter" /></a></li>
                                <li><a href="#"><i className="icofont-dribbble" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage