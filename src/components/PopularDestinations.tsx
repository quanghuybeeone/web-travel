import React from 'react'

const PopularDestinations: React.FC = () => {
    return (
        <section className='destinations'>
            <div className='text-center col-12'>
                <h1 className='text-title'>Popular Destinations</h1>
                <h3 className='text-desc'>World's best tourist destinations</h3>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
                        <div className='img_tour'>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg" alt="" />
                            <div className='title_tour'>Tokyo</div>
                            <div className='cover_img'></div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
                        <div className='img_tour'>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg" alt="" />
                            <div className='title_tour'>Seoul</div>
                            <div className='cover_img'></div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
                        <div className='img_tour'>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg" alt="" />
                            <div className='title_tour'>Paris</div>
                            <div className='cover_img'></div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
                        <div className='img_tour'>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg" alt="" />
                            <div className='title_tour'>London</div>
                            <div className='cover_img'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularDestinations