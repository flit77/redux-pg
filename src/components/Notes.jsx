import React from 'react';

class Notes extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props);

    this.onAddNote = this.onAddNote.bind(this);
  }

  onAddNote() {
    const id = window.state.nextNoteId;
    window.state.notes[id] = {
      id,
      content: ''
    };
    window.state.nextNoteId++;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <ul className="note-list">
          {Object.keys(this.props.notes).map(id =>
            <li className="note-list-item" key={id}>
              {id}
            </li>
          )}
        </ul>
        <button className="editor-button" onClick={this.onAddNote}>
          New Note
        </button>
      </div>
    )
  }
}

export default Notes;