import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddPedido extends Component{
  addPedido(newPedido){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/Pedidos',
      data: newPedido
    }).then(response => {
      this.props.history.push('/pedido');
    }).catch(err => console.log(err));

  }

  

  onSubmit(e){
    const newPedido = {
      fechaPedido:this.refs.fecha.value,
      productoPedido: this.refs.producto.value,
      tamañoPedido: this.refs.tamaño.value,
      telefonoPedido: this.refs.telefono.value,
      direccionPedido: this.refs.direccion.value,
      clientePedido: this.refs.cliente.value,
      referenciaPedido: this.refs.referencia.value,
      estadoPago: this.refs.pago.value,
      montoTotal: this.refs.monto.value      
    }
    
    this.addPedido(newPedido);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/pedido">Back</Link>
       <h1>Agregar Pedido</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="cliente" ref="cliente" />
            <label htmlFor="cliente">Cliente</label>
          </div>
          <div className="input-field">
            <strong>Fecha:</strong>
            <input type="date" name="fecha" ref="fecha" />
          </div>
          <div className="input-field">
            <input type="text" name="direccion" ref="direccion" />
            <label htmlFor="direccion">Direccion</label>
          </div>
          <div className="input-field">
            <input type="text" name="referencia" ref="referencia" />
            <label htmlFor="referencia">Referencia</label>
          </div>
          <div className="input-field">
            <input type="number" name="telefono" ref="telefono" />
            <label htmlFor="telefono">Telefono</label>
          </div>
          <div className="input-field">
            <input type="text" name="producto" ref="producto" />
            <label htmlFor="producto">Producto</label>
          </div>
          <div className="input-field">
            <input type="text" name="tamaño" ref="tamaño" />
            <label htmlFor="tamaño">Tamaño:</label>
          </div>
          <div className="input-field">
            <input type="text" name="pago" ref="pago" />
            <label htmlFor="pago">Pago</label>
          </div>
          <div className="input-field">
            <input type="number" name="monto" ref="monto" />
            <label htmlFor="monto">Monto</label>
          </div>
          
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddPedido;