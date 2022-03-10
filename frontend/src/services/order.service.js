import { httpService } from './http.service';

const STORAGE_KEY = 'order';

export const orderService = {
  save,
  _setOrder,
  getEmptyOrder,
  getOrder,
  query,
};

// async function save(order) {
//   _setOrder(order);
//   return await storageService.post(STORAGE_KEY, order);
// }

async function query(filterBy) {
  try {
    const order = await httpService.get('order/', filterBy);
    return order;
  } catch (err) {
    console.log('Cannot get orders', err);
  }
}

// getOrder - checks if there's an order in session storage - if not returns an empty order.
async function getOrder() {
  const order = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || getEmptyOrder();
  _setOrder(order);
  return order;
}

//save
async function save(orderToSave) {
  if (orderToSave._id) {
    try {
      await httpService.put(`order/${orderToSave._id}`, orderToSave);
    } catch (err) {
      console.log('Cannot save order', err);
    }
  } else {
    try {
      const order = await httpService.post('order/', orderToSave);
      return order.data;
    } catch (err) {
      console.log('Cannot save order', err);
    }
  }
}

////saveDraftOrder
function _setOrder(order) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  return order;
}

// getEmptyOrder - return empty order
function getEmptyOrder() {
  return {
    totalPrice: 0,
    startDate: '',
    endDate: '',
    guests: {
      adults: 0,
      kids: 0,
      infants: 0,
      Pets: 0,
    },
    stay: {
      _id: '',
      name: '',
      price: 0,
    },
    status: 'pending',
  };
}
