import React from 'react'

const Service: React.FC = () => {
    return (
        <>
        <section className='service'>
            <div className='text-center col-12'>
                <h1 className='text-title'>Why Choose Us</h1>
                <h3 className='text-desc'>Here are reasons you should plan trip with us</h3>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 p-4 text-center'>
                        <img className='pb-2' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" alt="" />
                        <h1 className='pb-2'>Handpicked Hotels</h1>
                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                    </div>
                    <div className='col-lg-4 col-md-12 p-4 text-center'>
                        <img className='pb-2' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" alt="" />
                        <h1 className='pb-2'>World Class Service</h1>
                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                    </div>
                    <div className='col-lg-4 col-md-12 p-4 text-center'>
                        <img className='pb-2' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" alt="" />
                        <h1 className='pb-2'>Best Price Guarantee</h1>
                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                    </div>
                </div>
            </div>
        </section>
        <div className='banner'>

        </div>
        </>
        
    )
}

export default Service