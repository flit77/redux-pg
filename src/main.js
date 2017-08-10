import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/note';
import Notes from './components/Notes.jsx';
import createStore from './store';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

const initialState = {
  nextNoteId: 1,
  notes: {}
};

window.state = initialState;

const store = createStore(reducer);

store.subscribe(() => {
  ReactDOM.render(
    <pre>
      {JSON.stringify(store.getState(), null, 2)}
    </pre>,
    document.getElementById('root')
  );
});

store.dispatch({
  type: CREATE_NOTE
});

store.dispatch({
  type: UPDATE_NOTE,
  id: 1,
  content: 'Hello, world!'
});

// const renderApp = () => {
//   ReactDOM.render(
//     <Notes notes={window.state.notes} />,
//     document.getElementById('root')
//   );
// };

// renderApp();
