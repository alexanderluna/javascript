import React          from 'react'
import { render }     from 'react-dom'
import App            from './components/App'
import Ups404         from './components/Ups404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(<Router history={ hashHistory }>
        <Route path="/" component={ App } />
        <Route path="list-days" component={ App }>
          <Route path=":filter" component={ App }/>
        </Route>
        <Route path="add-day" component={ App } />
        <Route path="members" component={ App } />
        <Route path="*" component={ Ups404 } />
      </Router>, document.getElementById('root'))
