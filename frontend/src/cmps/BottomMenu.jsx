import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../store/user.action';
import { updateText } from '../store/modal.action';
import { useSelector, useDispatch } from 'react-redux';
import { setNotification } from '../store/order.action';
import NotificationIcon from '../assets/imgs/4.svg';
import logo from '../assets/imgs/1181191_airbnb_icon.svg';

export function BottomMenu({ onToggleHamburger, toggleLoginModal, setToggleLoginModal, loggedIn }) {

  const dispatch = useDispatch();
  const notification = useSelector((state) => state?.ordersModule.notification);

  const onToggleLoginModal = (e) => {
    e.stopPropagation();
    setToggleLoginModal(!toggleLoginModal);
  };


  //clear notification

  const clearNotification = () => {
    if (!loggedIn) {
      setToggleLoginModal(true);
      return;
    }
    dispatch(setNotification(false));
  };

  //logout

  const onLogout = () => {
    dispatch(logout());
    dispatch(updateText({ txt: 'Logged out!', type: 'success' }));
  };

  return (
    <section className='bottom-menu'>
      <Link to='/' className='clean-link'>
        Home
      </Link>
      {!loggedIn && <div onClick={onToggleLoginModal}>
        Log in
      </div>}

      {loggedIn && <Link to='/Trips' className='clean-link'>
        {' '}
        <div onClick={clearNotification}>Trips </div>
      </Link>}

      {loggedIn && <Link to='/Orders' className='clean-link'>
        {' '}
        {notification && <img src={NotificationIcon} className='red-dot'></img>}
        <div onClick={clearNotification}>Orders</div>{' '}
      </Link>}

      {loggedIn && <div onClick={onLogout}>Logout</div>}
    </section>
  );
}