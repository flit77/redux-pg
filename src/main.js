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

const delayMiddleware = () => next => action => {
  setTimeout(() => {
    next(action);
  }, 1000);
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
  applyMiddleware(delayMiddleware, loggingMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <NoteAppContainer />
  </Provider>,
  document.getElementById('root')
);
