export default (...middlewares) => store => {
  if (middlewares.length === 0) {
    return dispatch => dispatch;
  }
  if (middlewares.length === 1) {
    return middlewares[0];
  }
  const boundMiddlewares = middlewares.map(middleware => middleware(store));
  return boundMiddlewares.reduce((a, b) => next => a(b(next)));
};
