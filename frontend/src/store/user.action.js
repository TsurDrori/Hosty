import { userService } from '../services/user.service.js';
import { socketService } from '../services/socket.service';
export function login(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(credentials);
      if (user) socketService.emit('set-user-socket', user._id);
      dispatch({ type: 'SET_USER', user });
    } catch (err) {
      console.log('no user found', err);
    }
  };
}

export function signup(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.signup(credentials);
      if (user) socketService.emit('set-user-socket', user._id);
      dispatch({ type: 'SET_USER', user });
    } catch (err) {
      console.log('Cannot signup');
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await userService.logout();
      dispatch({ type: 'SET_USER', user: null });
    } catch (err) {
      console.log('Cannot logout');
    }
  };
}

// userService.login(credentials).then(user => {
//     dispatch({ type: 'SET_USER', user })
// })
//     .catch(err => {
//         console.log('no user found', err)
//     })

// userService.signup(credentials)
// .then(user => {
//     dispatch({ type: 'SET_USER', user })
//     // showSuccessMsg('Signed up')
// })

// userService.logout().then(
//     dispatch({ type: 'SET_USER', user: null })
// )
