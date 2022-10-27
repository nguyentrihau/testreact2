import React, { Component } from 'react'
import Body from './Body'
import Header from './Header'

export default class TryGlasses extends Component {
  render() {
    return (
      <div className='bg-tryglass'>
        <div><Header/></div>
        <div><Body/></div>
      </div>
    )
  }
}
