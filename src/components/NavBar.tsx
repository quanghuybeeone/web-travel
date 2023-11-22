import React, { useState, useEffect } from 'react'

const NavBar: React.FC = () => {

    const [stickyNavbar, setStickyNavbar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [stickyNavbar]);

    const handleScroll = () => {
        setStickyNavbar(window.scrollY > 300);
    };
    return (
        <>
            <header className={`${stickyNavbar ? 'headerscroll':""}`}>
                <nav>
                    <div id='logo_nav'>
                        LOGO
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Tour</a>
                            </li>
                            <li>
                                <a href="#">Booking</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-bars"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-shopping-cart"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        </>

    )
}

export default NavBar