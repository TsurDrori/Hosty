import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateText } from '../store/modal.action';

export const UserMsg = () => {
  const timeOutId = useRef();

  const message = useSelector((state) => state?.modalModule.msg);

  const dispatch = useDispatch();

  useEffect(() => {
    if (timeOutId.current) clearTimeout(timeOutId.current);

    timeOutId.current = setTimeout(() => {
      closeMsg();
    }, 5000);
  }, [message]);

  const closeMsg = () => {
    dispatch(updateText(null));
  };

  if (!message) return <span></span>;

  const msgClass = message.type || '';
  if (message.link === null) return <span></span>;
  return (
    <section className={'user-msg ' + msgClass}>
      <button
        onClick={() => {
          closeMsg();
        }}>
        <span className='x'>x</span>
      </button>
      {message.txt}
      {message.link === 'trips' ? <a href='https://hosty-bnb-app.herokuapp.com/Trips'>Link here</a> : <span></span>}
      {message.link === 'orders' ? <a href='https://hosty-bnb-app.herokuapp.com/Orders'>Link here</a> : <span></span>}
    </section>
  );
};
