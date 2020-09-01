import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PromocionItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        <Link to={`/promocion/${this.state.item.id}`}>{this.state.item.tituloPromocion} </Link><span className="right">CADUCA: {this.state.item.fechaCaducidad}</span>
      </li>
    )
  }
}

export default PromocionItem;