import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { UserMsg } from '../cmps/UserMsg';
import { socketService } from '../services/socket.service';
import { setNotification } from '../store/order.action';
import { updateText } from '../store/modal.action';

export function AppFooter() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.userModule.user);

  useEffect(() => {
    socketService.setup();
    if (user) {
      socketService.emit('set-user-socket', user._id);
    }
    socketService.on('order-sent', (order) => {
      dispatch(setNotification(true));

      dispatch(updateText({ txt: `New order at your stay ${order.stay.name}`, type: 'success', link: 'orders' }));
    });
    socketService.on('order-status-updated', (order) => {
      const getText = () => {
        switch (order.status) {
          case 'pending':
            return 'pending';
          case 'approve':
            return 'approved';
          case 'cancel':
            return 'cancelled';
        }
      };

      const getStatus = () => {
        switch (order.status) {
          case 'approve':
            return 'success';
          case 'cancel':
            return 'danger';
        }
      };
      dispatch(setNotification(true));
      dispatch(
        updateText({
          txt: `Your order from  ${order.host.fullname} was ${getText()} `,
          type: getStatus(),
          link: 'trips',
        })
      );
    });
    return () => {
      socketService.off('order-status-updated');
      socketService.off('order-sent');
      socketService.terminate();
    };
  }, []);

  return (
    <div className='app-footer-container full main-root'>
      <div className='app-footer'>
        <div className='app-footer-column'>
          <h3>Support</h3>
          <h4>Help Center</h4>
          <h4>Safety Information</h4>
          <h4>Cancellation options</h4>
          <h4>Our COVID-19 Response</h4>
          <h4>Supporting people with disabilities</h4>
          <h4>Report a neghborhood concern</h4>
        </div>

        <div className='app-footer-column'>
          <h3>Community</h3>
          <h4>Support Afghan refugees</h4>
          <h4>Celebrating diversity & belonging</h4>
          <h4>Combating discrimination</h4>
        </div>

        <div className='app-footer-column'>
          <h3>hosting</h3>
          <h4>Try hosting</h4>
          <h4>AirCover: protection for Hosts</h4>
          <h4>Explore hosting resources</h4>
          <h4>Visit our community forum</h4>
          <h4>How to host responsibly</h4>
        </div>

        <div className='app-footer-column'>
          <h3>About</h3>
          <h4>Newsroom</h4>
          <h4>Learn about new features</h4>
          <h4>Letter from our founders</h4>
          <h4>Careers</h4>
          <h4>Investors</h4>
          <h4>Airbnb Luxe</h4>
        </div>
      </div>

      <div className='app-footer-endline'>
        <div>
          © 2022 no rights reserved, this is a clone of the Airbnb website for learning purposes ·Privacy·Terms·Sitemap
        </div>
        <div className='app-footer-icons'>
          <span>
            <FacebookIcon />{' '}
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
        </div>
        <UserMsg />
      </div>
    </div>
  );
}
