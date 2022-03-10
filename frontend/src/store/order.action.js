import { orderService } from '../services/order.service.js';
import { socketService } from '../services/socket.service';

export function updateOrder(order) {
  return (dispatch, getState) => {
    const action = { type: 'SET_ORDER', order };
    dispatch(action);
  };
}

export function setNotification(value) {
  return (dispatch) => {
    const action = { type: 'SET_NOTIFICATION', value };

    dispatch(action);
  };
}

export function updateOrderStatus(orderToUpdate) {
  return async (dispatch) => {
    await orderService.save(orderToUpdate);
    const action = { type: 'UPDATE_ORDER', orderToUpdate };
    socketService.emit('update-order-status', orderToUpdate);
    dispatch(action);
  };
}

export function loadOrders(filterBy) {
  return async (dispatch, getState) => {
    const orders = await orderService.query(filterBy);
    const action = { type: 'SET_ORDERS', orders };
    dispatch(action);
  };
}

export function reserveOrder(order) {
  return async (dispatch, getState) => {
    socketService.emit('send-order', order);
    await orderService.save(order);
    const action = { type: 'SET_ORDER', order: orderService.getEmptyOrder() };
    dispatch(action);
  };
}
