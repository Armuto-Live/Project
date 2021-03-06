import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ClienteItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        <Link to={`/cliente/${this.state.item.id}`}>{this.state.item.apellidoCliente} {this.state.item.nombreCliente}</Link>
      </li>
    )
  }
}

export default ClienteItem;