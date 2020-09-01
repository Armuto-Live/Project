import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class PedidoDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getPedido();
  }

  getPedido(){
    let pedidoId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Pedidos/${pedidoId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let pedidoId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/Pedidos/${pedidoId}`)
      .then(response => {
        this.props.history.push('/pedido');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div>
       <br />
       <Link className="btn grey" to="/pedido">Regresar</Link>
       <h1>{this.state.details.clientePedido}</h1>
       <ul className="collection">
        <li className="collection-item">Fecha: {this.state.details.fechaPedido}</li>
        <li className="collection-item">Direccion: {this.state.details.direccionPedido}</li>
        <li className="collection-item">Referencia: {this.state.details.referenciaPedido}</li>
        <li className="collection-item">Telefono: {this.state.details.telefonoPedido}</li>
        <li className="collection-item">Producto: {this.state.details.productoPedido}</li>
        <li className="collection-item">Pago: {this.state.details.estadoPago}</li>
        <li className="collection-item">Monto: {this.state.details.montoTotal}</li>
        </ul>
        <Link className="btn" to={`/pedido/edit/${this.state.details.id}`}> Edit</Link>

        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default PedidoDetails;