import React from 'react'
import heroVideo from '../assets/hero-video.mp4';

const Hero:React.FC = () => {
  return (
    <section className="hero">
      <video
        controls={false}
        muted
        autoPlay={true}
        loop
        className="video_hero"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>

      <div className="content_hero">
        <h1 className="text-title">
            Where do you want to go?
        </h1>
        <h3 className="">
        Trips, experiences, and places. All in one service
        </h3>
        <div className='group_input'>
            <div className='item_input'>
                <input type="text" />
            </div>
            <div className='item_input'>
                <input type="date" />
            </div>
            <div className='item_input'>
                <select name="" id="">
                    <option value="">Sort By Date</option>
                    <option value="">Price Low to High</option>
                    <option value="">Price High to Low</option>
                    <option value="">4</option>
                </select>
            </div>
            <div className='item_input'>
                <button>Search</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero