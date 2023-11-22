import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='footer1'>
                <div className="row">
                    <div className='col-lg-4 col-md-12 p-4'>
                        <h2 className='mb-3'>Our Awards</h2>
                        <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                    </div>
                    <div className='col-lg-4 col-md-12 p-4'>
                        <h2 className='mb-3'>Contact Info</h2>
                        <ul>
                            <li><i className="fa fa-mobile-alt mx-2"></i> 1-567-124-44227</li>
                            <li><i className="fa fa-map-marker-alt mx-2"></i>184 Main Street East Perl Habour 8007</li>
                            <li><i className="fa fa-clock mx-2"></i>Mon - Sat 8.00 - 18.00 Sunday CLOSED</li>
                            <li>
                                <a className='social_wrapper facebook' href=""><i className="fa fa-facebook"></i></a>
                                <a className='social_wrapper twitter' href=""><i className="fa fa-twitter"></i></a>
                                <a className='social_wrapper youtube' href=""><i className="fa fa-youtube"></i></a>
                                <a className='social_wrapper pinterest' href=""><i className="fa fa-pinterest"></i></a>
                                <a className='social_wrapper instagram' href=""><i className="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-12 p-4'>
                        <h2 className='mb-3'>Recent Trips</h2>
                        <div className="row">
                            <div className="col-4 p-2">
                                <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
                            </div>
                            <div className="col-4 p-2">
                                <img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="" />
                            </div>
                            <div className="col-4 p-2">
                                <img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="" />
                            </div>
                            <div className="col-4 p-2">
                                <img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="" />
                            </div>
                            <div className="col-4 p-2">
                                <img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="" />
                            </div>
                            <div className="col-4 p-2">
                                <img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer2'>
                <div>© Copyright quang.huybeeone</div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Tour</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer