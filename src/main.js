import React from 'react';
import ReactDOM from 'react-dom';
import noteReducer from './reducers/note';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const onAddNote = () => {
  const id = window.state.nextNoteId;
  window.state.notes[id] = {
    id,
    content: ''
  };
  window.state.nextNoteId++;
  renderApp();
};

const NoteApp = ({ notes }) =>
  <div>
    <ul className="note-list">
      {Object.keys(notes).map(id =>
        <li className="note-list-item" key={id}>
          {id}
        </li>
      )}
    </ul>
    <button className="editor-button" onClick={onAddNote}>
      New Note
    </button>
  </div>;

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
    // <NoteApp notes={window.state.notes} />,
    <pre>
      {JSON.stringify(state1, null, 2)}
    </pre>,
    document.getElementById('root')
  );
};

renderApp();
