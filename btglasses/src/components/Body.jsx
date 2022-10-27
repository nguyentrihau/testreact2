import React, { Component } from 'react'
import ListGlasses from './ListGlasses'
import Test from './Test'
import TextContent from './TextContent'


export default class Body extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-around">
                    <div>
                        <div className='test'>
                            <Test/>
                            <TextContent/>
                        </div>
                    </div>
                    <div className='test'><Test /></div>
                </div>

                <div className='listGlasses container '><ListGlasses /></div>
            </div>
        )
    }
}
