import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditPedido extends Component{
  constructor(props){
    super(props);
    this.state = {
    id: '',
      fechaPedido: '',
      productoPedido: '',
      telefonoPedido: '',
      direccionPedido:'',
      clientePedido: '',
      referenciaPedido: '',
      estadoPago: '',
      montoTotal:  ''
     
    }

  }
  
  componentWillMount(){
    this.getPedidoDetails();
  }

  getPedidoDetails(){
    let pedidoId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Pedidos/${pedidoId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        fechaPedido: response.data.fechaPedido,
        productoPedido: response.data.productoPedido,
        telefonoPedido: response.data.telefonoPedido,
        direccionPedido: response.data.direccionPedido,
        clientePedido: response.data.clientePedido,
        referenciaPedido: response.data.referenciaPedido,
        estadoPago: response.data.estadoPago,
        montoTotal: response.data.montoTotal  
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  EditPedido(newPedido){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/Pedidos/${this.state.id}`,
      data: newPedido
    }).then(response => {
      this.props.history.push('/pedido');
    }).catch(err => console.log(err));

  }

  onSubmit(e){
    const newPedido = {
      fechaPedido: this.refs.fecha.value,
      productoPedido: this.refs.producto.value,
      telefonoPedido: this.refs.telefono.value,
      direccionPedido: this.refs.direccion.value,
      clientePedido: this.refs.cliente.value,
      referenciaPedido: this.refs.referencia.value,
      estadoPago: this.refs.pago.value,
      montoTotal: this.refs.monto.value  
    }
    this.EditPedido(newPedido);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to={`/pedido/${this.state.id}`}>Regresar</Link>
       <h1>Editar Pedido</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
       <div className="input-field">
            <strong>Fecha: {this.state.fechaPedido}</strong>
            <input type="date" name="fecha" ref="fecha" />
          </div>
          <div className="input-field">
            <strong>Cliente: {this.state.clientePedido}</strong>
            <input type="text" name="cliente" ref="cliente" />
            
          </div>
          <div className="input-field">
            <strong>Direccion: {this.state.direccionPedido}</strong>
            <input type="text" name="direccion" ref="direccion" />
            
          </div>
          <div className="input-field">
            <strong>Referencia: {this.state.referenciaPedido}</strong>
            <input type="text" name="referencia" ref="referencia" />
            
          </div>
          <div className="input-field">
            <strong >Telefono: {this.state.telefonoPedido}</strong>
            <input type="number" name="telefono" ref="telefono" />
            
          </div>
          <div className="input-field">
            <strong>Producto: {this.state.productoPedido}</strong>
            <input type="text" name="producto" ref="producto" />
            
          </div>
          <div className="input-field">
            <strong>Pago: {this.state.estadoPago}</strong>
            <input type="text" name="pago" ref="pago" />
            
          </div>
          <div className="input-field">
            <label htmlFor="monto">Monto: {this.state.montoTotal}</label>
            <input type="number" name="monto" ref="monto" />
            
          </div>
          
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditPedido;