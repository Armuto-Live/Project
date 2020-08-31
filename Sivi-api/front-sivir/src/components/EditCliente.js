import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditCliente extends Component{
 constructor(props){
   super(props);
   this.state={
     id: '',
     nombreCliente: '',
     apellidoCliente: '',
     telefonoCliente: 0,
     direccionCliente: '',
     dniCliente: 0,
     referenciaCliente: ''
   }
 }


  componentWillMount(){
    this.getClienteDitails();
  }


  getClienteDitails(){
    let clienteId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Clientes/${clienteId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        nombreCliente:   response.data.nombreCliente,
        apellidoCliente: response.data.apellidoCliente,
        telefonoCliente: response.data.clienteTelefono,
        direccionCliente: response.dat.direccionCliente,
        dniCliente: response.data.dniCliente,
        referenciaCliente:response.data.referenciaCliente
      }
        , () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
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
       <Link className="btn grey" to="/">Back</Link>
       <h1>Agregar Cliente</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="nombre" ref="nombre" value={this.state.nombreCliente} />
            <label htmlFor="nombre">Nombres</label>
          </div>
          <div className="input-field">
            <input type="text" name="apellido" ref="apellido"  value={this.state.apellidoCliente}/>
            <label htmlFor="apellido">Apellidos</label>
          </div>
          <div className="input-field">
            <input type="number" name="telefono" ref="telefono"  value={this.state.nombre}/>
            <label htmlFor="telefono">Telefono</label>
          </div>
          <div className="input-field">
            <input type="text" name="direccion" ref="direccion"  value={this.state.nombre}/>
            <label htmlFor="direccion">Direccion</label>
          </div>
          <div className="input-field">
            <input type="number" name="dni" ref="dni"  value={this.state.nombre}/>
            <label htmlFor="dni">DNI</label>
          </div>
          <div className="input-field">
            <input type="text" name="referencia" ref="referencia"  value={this.state.nombre}/>
            <label htmlFor="referencia">Referencia</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditCliente;