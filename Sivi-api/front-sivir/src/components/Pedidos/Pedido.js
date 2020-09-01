import React, { Component } from 'react';
import axios from 'axios';
import PedidoItem from './PedidoItem';
import { Link } from 'react-router-dom';

class Pedido extends Component{
  constructor(){
    super();
    this.state = {
      pedidos: []
    }
  }

  componentWillMount(){
    this.getPedidos();
  }
  
  getPedidos(){
    axios.get('http://localhost:3000/api/Pedidos')
      .then(response => {
        this.setState({pedidos: response.data}, () => {
          console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const pedidosItems = this.state.pedidos.map((pedido, i) => {
      return(
        <PedidoItem key={pedido.id} item={pedido} />
      )
    })
    return (
      <div>
        <h1>Pedidos</h1>
        <ul className="collection">
          {pedidosItems}
        </ul>
        <div className="fixed-action-btn">
      <Link to="/pedido/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
      </div>
    )
  }
}

export default Pedido;