import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PedidoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        <Link to={`/pedido/${this.state.item.id}`}>{this.state.item.clientePedido}</Link>
      </li>
    )
  }
}

export default PedidoItem;