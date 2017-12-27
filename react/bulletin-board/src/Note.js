import React from 'react'
import Draggable from 'react-draggable'
import createReactClass from 'create-react-class'
import './App.css'

var Note = createReactClass({
  getInitialState() {
    return { editing: false }
  },
  componentDidUpdate(){
    if (this.state.editing) {
      this.refs.newText.focus()
      this.refs.newText.select()
    }
  },
  shouldComponentUpdate(nextProps, nextState){
    return this.props.children !== nextProps.children || this.state !== nextState
  },
  edit() {
    this.setState({editing: true})
  },
  save() {
    this.props.onChange(this.refs.newText.value, this.props.id)
    this.setState({editing: false})
  },
  remove() {
    this.props.onRemove(this.props.id)
  },
  renderForm() {
    return (<div className="card">
              <textarea className="form-control" ref="newText" defaultValue={this.props.children}></textarea>
              <button className="btn btn-primary" onClick={this.save} >SAVE</button>
            </div>)
  },
  renderDisplay() {
    return (<div className="card">
              <p>{this.props.children}</p>
              <span>
                <button className="btn btn-primary" onClick={this.edit} >EDIT</button>
                <button className="btn btn-danger" onClick={this.remove} >X</button>
              </span>
            </div>)
  },
  render() {
    return (<Draggable>
              { (this.state.editing) ? this.renderForm() : this.renderDisplay() }
            </Draggable>)
  }
})

export default Note
