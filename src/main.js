import React from 'react';
import ReactDOM from 'react-dom';
import noteReducer from './reducers/note';
import Notes from './components/Notes.jsx';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const initialState = {
  nextNoteId: 1,
  notes: {}
};

window.state = initialState;

const state0 = noteReducer(undefined, {
  type: CREATE_NOTE
});

const state1 = noteReducer(state0, {
  type: UPDATE_NOTE,
  id: 1,
  content: 'Hello, world!'
});

const renderApp = () => {
  ReactDOM.render(
    <Notes notes={window.state.notes} />,
    // <pre>
    //   {JSON.stringify(state1, null, 2)}
    // </pre>,
    document.getElementById('root')
  );
};

renderApp();
