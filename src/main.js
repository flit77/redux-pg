import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/note';
import NoteApp from './components/NoteApp.jsx';
import NoteAppContainer from './components/NoteAppContainer.jsx';
import createStore from './store';
import Provider from './provider';
import applyMiddleware from './applyMiddleware';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action({ dispatch, getState });
  }
  return next(action);
};

const loggingMiddleware = ({ getState }) => next => action => {
  console.info('before', getState());
  console.info('action', action);
  const result = next(action);
  console.info('after', getState());
  return result;
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <NoteAppContainer />
  </Provider>,
  document.getElementById('root')
);
