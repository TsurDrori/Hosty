import React, { useEffect, useState, useRef } from 'react';
import { LoginSignupModal } from './LoginSignupModal';
import { HamburgerMenu } from './HamburgerMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationIcon from '../assets/imgs/2.svg';
import { useSelector } from 'react-redux';
import { BottomMenu } from './BottomMenu';


export function Menu() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [marker, setMarker] = useState(false);
  const [toggleLoginModal, setToggleLoginModal] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  const notification = useSelector((state) => state?.ordersModule.notification);
  const user = useSelector((state) => state?.userModule.user);


  useEffect(() => {
    if (!user) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [user]);

  useEffect(() => {
    if (!notification) {
      setMarker(false);
    } else {
      setMarker(true);
    }
  }, [notification]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsSmallScreen((window.innerWidth <= 740) ? true : false)
    // console.log(isSmallScreen);
  }, [windowWidth]);

  const onToggleLoginModal = () => {
    setToggleLoginModal(!toggleLoginModal);
  };

  const onToggleHamburger = () => {
    setToggleHamburger(!toggleHamburger);

  };



  // small screen constant bottom menu
  if (isSmallScreen) return (
    <div>

    <BottomMenu
      setToggleLoginModal={setToggleLoginModal}
      toggleLoginModal={toggleLoginModal}
      loggedIn={loggedIn}
      />
      {toggleLoginModal && <LoginSignupModal onToggleLoginModal={onToggleLoginModal} />}
      </div>
  )

  // wide screen hamburger menu 
  return (
    <div className='menu-container'>
      <div className='hamburger-container' onClick={onToggleHamburger}>
        {notification && <img className='red-dot' src={NotificationIcon}></img>}

        <div className={!loggedIn ? 'hamburger-container' : 'hamburger-container-red'} onClick={onToggleHamburger}>
          <MenuIcon />
          <AccountCircleIcon />
        </div>
        {toggleHamburger && <div onClick={onToggleHamburger} className='bg'></div>}
        {toggleLoginModal && <div onClick={onToggleLoginModal} className='bg'></div>}

        {toggleHamburger && (
          <HamburgerMenu
            onToggleHamburger={onToggleHamburger}
            setToggleLoginModal={setToggleLoginModal}
            toggleLoginModal={toggleLoginModal}
            toggleHamburger={toggleHamburger}
            loggedIn={loggedIn}
          />
        )}
        {toggleLoginModal && <LoginSignupModal onToggleLoginModal={onToggleLoginModal} />}
      </div>
    </div>
  )
}
