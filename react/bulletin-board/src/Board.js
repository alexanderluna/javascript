import React from 'react'
import './App.css'
import Note from './Note'
import createReactClass from 'create-react-class'

var Board = createReactClass({
  propTypes: {
    count: function(props, propName) {
      if (typeof props[propName] !== "number") {
        return new Error("count must be a number")
      }
      if (props[propName] > 100) {
        return new Error(props[propName] + " are too many props to render")
      }
    }
  },
  getInitialState() {
    return { notes: [] }
  },
  componentWillMount(){
    if (this.props.count) {
      var url = `https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
      fetch(url).then(results => results.json())
                .then(array   => array[0])
                .then(text    => text.split('. '))
                .then(array   => array.forEach(sentence => this.add(sentence)))
                .catch(err    => console.log("Couldn't fetch API", err))
    }
  },
  nextId() {
    this.uniqueID = this.uniqueID || 0
    return this.uniqueID++
  },
  add(text) {
    var notes = [...this.state.notes, { id: this.nextId(), note: text }]
    this.setState({notes})
  },
  update(newText, id) {
    var notes = this.state.notes.map(note =>
      (note.id !== id) ? note : { ...note, note: newText }
    )
    this.setState({notes})
  },
  remove(id) {
    var notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  },
  eachNote(note) {
    return (<Note key={note.id} id={note.id} onChange={this.update} onRemove={this.remove}>
                {note.note}
            </Note>)
  },
  render() {
    return (<div className="board">
              {this.state.notes.map(this.eachNote)}
              <button className="btn btn-primary" onClick={() => this.add('New Note')}>+</button>
            </div>)
  }
})

export default Board;
