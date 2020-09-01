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
        <Link to={`/pedido/${this.state.item.id}`}>{this.state.item.clientePedido} </Link> 
        <span className="right">---FECHA: {this.state.item.fechaPedido}</span>
        <strong className="right">{this.state.item.estadoPago.toUpperCase()}</strong> 
      </li>
    )
  }
}

export default PedidoItem;