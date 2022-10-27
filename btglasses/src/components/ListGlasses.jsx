import React, { Component } from 'react'
import GlassList from './dataGlasses.json';
// const GlassList = require('./dataGlasses.json')
console.log(GlassList);


export default class ListGlasses extends Component {

  render() {
    const {product} = this.props;
    return (
      <div style={{gap:'10px'}} className='list_glass1  mt-5 row'>
        {GlassList.map((item,index)=>(
          <div className='pic_glass col-sm-2' key={item.id} 
          onClick={() => {
            this.props.getDetail(product);
            console.log(product);
          }}>
            <img src={item.url} className='img-fluid p-1' alt="" />
          </div>
        ))}
      </div>
    )
  }
}
