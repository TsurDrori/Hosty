import { Home } from './pages/Home.jsx';
import { StayDetails } from './pages/StayDetails';
import { StaySearch } from './pages/StaySearch';
import { BecomeHost } from './pages/BecomeHost.jsx';
import { UserOrders } from './pages/Order/UserOrders';
import { GuestTrips } from './pages/GuestTrips';
export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/StaySearch',
    component: StaySearch,
  },
  {
    path: '/stay/:stayId',
    component: StayDetails,
  },
  {
    path: '/BecomeHost',
    component: BecomeHost,
  },
  {
    path: '/Orders',
    component: UserOrders,
  },
  {
    path: '/Trips',
    component: GuestTrips,
  },
];
