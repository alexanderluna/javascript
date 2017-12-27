import React  from 'react'
import text   from './titles.json'
import './css/another.scss'
import './css/custom.css'


export const hello = (<h1 id="title" className="hello" style={{backgroundColor:'purple', color: 'white'}}>
                          { text.hello }
                      </h1>)


export const goodbye = (<h1 id="title" className="goodbye" style={{background: 'blue', color: 'white'}}>
                          { text.goodbye}
                        </h1>)
