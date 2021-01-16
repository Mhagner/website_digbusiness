import React from 'react'

const PortfolioSection = () => {
    return (
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
    )
}

export default PortfolioSection