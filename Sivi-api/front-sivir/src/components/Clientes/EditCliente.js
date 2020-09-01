import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditCliente extends Component{
  constructor(props){
    super(props);
    this.state = {
    id: '',
    nombreCliente: '',
    apellidoCliente: '',
    telefonoCliente: '',
    direccionCliente: '',
    dniCliente: '',
    referenciaCliente: '',
     
    }

  }
  
  componentWillMount(){
    this.getClienteDetails();
  }

  getClienteDetails(){
    let clienteId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Clientes/${clienteId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        nombreCliente:   response.data.nombreCliente,
        apellidoCliente: response.data.apellidoCliente,
        telefonoCliente: response.data.telefonoCliente,
        direccionCliente: response.data.direccionCliente,
        dniCliente: response.data.dniCliente,
        referenciaCliente:response.data.referenciaCliente
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editCliente(newCliente){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/Clientes/${this.state.id}`,
      data: newCliente
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));

  }

  onSubmit(e){
    const newCliente = {
      nombreCliente: this.refs.nombre.value,
      apellidoCliente: this.refs.apellido.value,
      telefonoCliente: this.refs.telefono.value,
      direccionCliente: this.refs.direccion.value,
      dniCliente: this.refs.dni.value,
      referenciaCliente: this.refs.referencia.value
    }
    this.editCliente(newCliente);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to={`/cliente/${this.state.id}`}>Regresar</Link>
       <h1>Editar Cliente</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="nombre" ref="nombre" />  
            <label htmlFor="nombre">Nombres: {this.state.nombreCliente}</label>
          </div>
          <div className="input-field">
            <input type="text" name="apellido" ref="apellido" /> 
            <label htmlFor="apellido">Apellidos: {this.state.apellidoCliente}</label>
          </div>
          <div className="input-field">
            <input type="number" name="telefono" ref="telefono" />  
            <label htmlFor="telefono">Telefono: {this.state.telefonoCliente} </label>
          </div>
          <div className="input-field">
            <input type="text" name="direccion" ref="direccion" /> 
            <label htmlFor="direccion">Direccion: {this.state.direccionCliente}</label>
          </div>
          <div className="input-field">
            <input type="number" name="dni" ref="dni"/> 
            <label htmlFor="dni">DNI: {this.state.dniCliente}</label>
          </div>
          <div className="input-field">
            <input type="text" name="referencia" ref="referencia" />  
            <label htmlFor="referencia">Referencia: {this.state.referenciaCliente}</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditCliente;