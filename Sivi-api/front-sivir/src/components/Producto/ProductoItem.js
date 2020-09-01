import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        <Link to={`/producto/${this.state.item.id}`}>{this.state.item.nombreProducto}</Link>
      </li>
    )
  }
}

export default ProductoItem;