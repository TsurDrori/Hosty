export const userService = {
  _getTxtByType,
};

function _getTxtByType(type) {
  switch (type) {
    case 'reserved':
      return 'Order reserved.';
  }
}
