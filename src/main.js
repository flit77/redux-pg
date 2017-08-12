import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/note';
import NoteApp from './components/NoteApp.jsx';
import NoteAppContainer from './components/NoteAppContainer.jsx';
import createStore from './store';
import Provider from './provider';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <NoteAppContainer />
  </Provider>,
  document.getElementById('root')
);
