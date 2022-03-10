const asyncLocalStorage = require('./als.service');
const logger = require('./logger.service');

var gIo = null;

function connectSockets(http, session) {
  gIo = require('socket.io')(http, {
    cors: {
      origin: '*',
    },
  });

  gIo.on('connection', (socket) => {
    socket.on('disconnect', (socket) => {
      console.log('Someone disconnected');
    });

    socket.on('set-user-socket', (userId) => {
      if (socket.userId === userId) return;
      if (socket.userId) {
        socket.leave(socket.userId);
      }
console.log('user id: ', userId);
      socket.join(userId);
      socket.userId = userId;
    });

    socket.on('send-order', (order) => {
      socket.to(order.host._id).emit('order-sent', order);
      console.log('order:', order.host._id);
    });

    socket.on('update-order-status', (order) => {
      console.log('order', order);
      socket.to(order.buyer._id).emit('order-status-updated', order);
      console.log('order:', order.status);
    });
  });
}

function emitTo({ type, data, label }) {
  if (label) gIo.to('watching:' + label).emit(type, data);
  else gIo.emit(type, data);
}

async function emitToUser({ type, data, userId }) {
  logger.debug('Emiting to user socket: ' + userId);
  const socket = await _getUserSocket(userId);
  if (socket) socket.emit(type, data);
  else {
    console.log('User socket not found');
    _printSockets();
  }
}

// Send to all sockets BUT not the current socket
async function broadcast({ type, data, room = null, userId }) {
  console.log('BROADCASTING', JSON.stringify(arguments));
  const excludedSocket = await _getUserSocket(userId);
  if (!excludedSocket) {
    // logger.debug('Shouldnt happen, socket not found')
    // _printSockets();
    return;
  }
  logger.debug('broadcast to all but user: ', userId);
  if (room) {
    excludedSocket.broadcast.to(room).emit(type, data);
  } else {
    excludedSocket.broadcast.emit(type, data);
  }
}

async function _getUserSocket(userId) {
  const sockets = await _getAllSockets();
  const socket = sockets.find((s) => s.userId == userId);
  return socket;
}
async function _getAllSockets() {
  // return all Socket instances
  const sockets = await gIo.fetchSockets();
  return sockets;
}

async function _printSockets() {
  const sockets = await _getAllSockets();
  console.log(`Sockets: (count: ${sockets.length}):`);
  sockets.forEach(_printSocket);
}
function _printSocket(socket) {
  console.log(`Socket - socketId: ${socket.id} userId: ${socket.userId}`);
}

module.exports = {
  connectSockets,
  emitTo,
  emitToUser,
  broadcast,
};
