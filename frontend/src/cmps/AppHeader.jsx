import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Menu } from './Menu';
import { HeaderCenter } from './HeaderCenter';
import logo from '../assets/imgs/1181191_airbnb_icon.svg';

export function AppHeader() {
  const [isWhiteHeader, setIsWhiteHeader] = useState(false);
  const location = useLocation();

  //SCROLL USE EFFECT
  useEffect(() => {
    if (location.pathname === '/') {
      setIsWhiteHeader(false);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    else {
      setIsWhiteHeader(true);
    }
  }, [location]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 5) setIsWhiteHeader(false);
    else if (position > 100) setIsWhiteHeader(true);
  };

  const backPage = () => {
    setIsWhiteHeader(false);
  };

  return (
    <header
      className={`full header ${isWhiteHeader ? 'white-header' : 'black-header'}`}>
      <Link to='/' className='header_icon clean-link'>
        <img className='header-logo' src={logo} alt='sfsdfs' />
        <h1 onClick={backPage}>Hosty</h1>
      </Link>

      <HeaderCenter />

      <div className='header__right'>

        {/* Need to add host functionality */}

        {/* <div className='nav-link'>
        <Link to='/StaySearch' className='clean-link'>
          {' '}
          Explore
        </Link>
      </div> */}
        {/* <div className='nav-link'>
         <Link to='/BecomeHost' className='clean-link'>
          Become a Host{' '}
        </Link>
      </div> */}

        <Menu />
      </div>
    </header>
  );
}


