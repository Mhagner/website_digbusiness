import React from 'react'

const BlogSection = () => {
    return (
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
    )
}

export default BlogSection