import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './steams/StreamCreate';
import StreamEdit from './steams/StreamEdit';
import StreamIndex from './steams/StreamIndex';
import StreamShow from './steams/StreamShow';
import StreamDelete from './steams/StreamDelete';
import Header from './Header';

export class App extends Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div className="">
                        <Header />
                        <Route path="/" exact component={StreamIndex} />
                        <Route path="/new" component={StreamCreate} />
                        <Route path="/edit" component={StreamEdit} />
                        <Route path="/show" component={StreamShow} />
                        <Route path="/delete" component={StreamDelete} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;