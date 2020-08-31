import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditCliente extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      nombre:'',
      apellido:'',
      dni: '',
      telefono:'',
      direccion: '',
      referencia: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getClienteDetails();
  }

  getClienteDetails(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Clientes/${meetupId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        nombre: response.data.nombreCLiente,
        apellido: response.data.apellidoCliente,
        dni: response.data.dniCliente,
        telefono: response.data.telefonoCliente,
        direccion: response.data.direccionCliente,
        referencia: response.data.referenciaCliente
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editMeetup(newCliente){
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
      nombre: this.refs.nombreCliente.value,
      apellido: this.refs.apellidoCliente.value,
      telefono: this.refs.telefonoCliente.value,
      direccion: this.refs.direccionCliente.value,
      dni: this.refs.dniCliente.value,
      referencia: this.refs.referenciaCliente.value
    }
    this.editCliente(newCliente);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Editar Cliente</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="nombre" ref="nombre" value={this.state.nombre} onChange={this.handleInputChange} />
            <label htmlFor="nombre">Nombres</label>
          </div>
          <div className="input-field">
            <input type="text" name="apellido" ref="apellido" value={this.state.apellido} onChange={this.handleInputChange} />
            <label htmlFor="apellido">apellidos</label>
          <div className="input-field">
            <input type="text" name="direccion" ref="direccion" value={this.state.direccion} onChange={this.handleInputChange} />
            <label htmlFor="direccion">Direccion</label>
          </div>
          <div className="input-field">
            <input type="text" name="referencia" ref="referencia" value={this.state.referencia} onChange={this.handleInputChange} />
            <label htmlFor="referencia">Referencia</label>
          </div>
          </div>
          <div className="input-field">
            <input type="text" name="telefono" ref="telefono" value={this.state.telefono} onChange={this.handleInputChange} />
            <label htmlFor="telefono">Telefono</label>
          </div>
          <div className="input-field">
            <input type="text" name="dni" ref="dni" value={this.state.dni} onChange={this.handleInputChange} />
            <label htmlFor="dni">DNi</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditCliente;