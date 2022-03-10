import { orderService } from '../services/order.service';

const initialState = {
  order: orderService.getOrder(),
  orders: [],
  notification: false,
};

export function ordersReducer(state = initialState, action = {}) {
  //was action={}

  switch (action.type) {
    case 'SET_ORDER':
      return { ...state, order: action.order };
    case 'SET_ORDERS':
      return { ...state, orders: [...action.orders] };
    case 'UPDATE_ORDER':
      const orders = state.orders.map((order) => {
        return order._id === action.orderToUpdate._id ? action.orderToUpdate : order;
      });
      return { ...state, orders };
    case 'SET_NOTIFICATION':
      return { ...state, notification: action.value };
    default:
      break;
  }

  return state;
}
