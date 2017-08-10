import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/note';
import NoteApp from './components/NoteApp.jsx';
import NoteAppContainer from './components/NoteAppContainer.jsx';
import createStore from './store';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const initialState = {
  nextNoteId: 1,
  notes: {}
};

window.state = initialState;

const store = createStore(reducer);

ReactDOM.render(
  <NoteAppContainer store={store} />,
  document.getElementById('root')
);
