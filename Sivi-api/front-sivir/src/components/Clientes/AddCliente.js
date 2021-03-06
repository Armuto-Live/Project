import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddCliente extends Component{
  addCliente(newCliente){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/Clientes',
      data: newCliente
    }).then(response => {
      this.props.history.push('/cliente');
    }).catch(err => console.log(err));

  }

  onSubmit(e){
    console.log(this.refs.nombre.value);
    const newCliente = {
      nombreCliente: this.refs.nombre.value,
      apellidoCliente: this.refs.apellido.value,
      telefonoCliente: this.refs.telefono.value,
      direccionCliente: this.refs.direccion.value,
      dniCliente: this.refs.dni.value,
      referenciaCliente: this.refs.referencia.value
      
    }
    this.addCliente(newCliente);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/cliente">Regresar</Link>
       <h1>Agregar Cliente</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="nombre" ref="nombre" />
            <label htmlFor="nombre">Nombres</label>
          </div>
          <div className="input-field">
            <input type="text" name="apellido" ref="apellido" />
            <label htmlFor="apellido">Apellidos</label>
          </div>
          <div className="input-field">
            <input type="number" name="telefono" ref="telefono" />
            <label htmlFor="telefono">Telefono</label>
          </div>
          <div className="input-field">
            <input type="text" name="direccion" ref="direccion" />
            <label htmlFor="direccion">Direccion</label>
          </div>
          <div className="input-field">
            <input type="number" name="dni" ref="dni" />
            <label htmlFor="dni">DNI</label>
          </div>
          <div className="input-field">
            <input type="text" name="referencia" ref="referencia" />
            <label htmlFor="referencia">Referencia</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddCliente;