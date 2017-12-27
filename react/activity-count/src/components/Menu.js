import { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">HOME</Link>
          </div>

          <div className="collapse navbar-collapse" id="myNav">
            <ul className="nav navbar-nav">
              <li><Link to="/add-day">Add Day</Link></li>
              <li><Link to="/list-days">List Days</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu
