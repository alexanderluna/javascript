import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamIndex from './streams/StreamIndex';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

export class App extends Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div className="">
                        <Header />
                        <Route path="/" exact component={StreamIndex} />
                        <Route path="/streams/new" component={StreamCreate} />
                        <Route path="/streams/edit" component={StreamEdit} />
                        <Route path="/streams/show" component={StreamShow} />
                        <Route path="/streams/delete" component={StreamDelete} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;