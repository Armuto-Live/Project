import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ClienteDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getCliente();
  }

  getCliente(){
    let clienteId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Clientes/${clienteId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let clienteId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/Clientes/${clienteId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div>
       <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>{this.state.details.apellidoCliente} {this.state.details.nombreCliente}</h1>
       <ul className="collection">
        <li className="collection-item">Direccion: {this.state.details.direccionCliente}</li>
        <li className="collection-item">Referencia: {this.state.details.referenciaCliente}</li>
        <li className="collection-item">Telefono:: {this.state.details.telefonoCliente}</li>
        <li className="collection-item">DNI: {this.state.details.dniCliente}</li>
        </ul>
        <Link className="btn" to={`/cliente/edit/${this.state.details.id}`}> Edit</Link>

        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default ClienteDetails;