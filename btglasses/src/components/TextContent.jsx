import React, { Component } from 'react'
import GlassList from './dataGlasses.json'
console.log(GlassList);
export default class TextContent extends Component {
  render() {
    return (
      <div className='txt'>
        <div className="content">
          {/* Header */}
          <div className="header">
            <h1 className="name">{GlassList.name}</h1>
            <p className="price">{GlassList.price} $</p>
          </div>
          {/* title */}
          <p className="desc">{GlassList.desc}</p>
        </div>
      </div>
    )
  }
}
