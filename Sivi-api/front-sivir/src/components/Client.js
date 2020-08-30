import React, { Component } from 'react';
import axios from 'axios';
import ClienteItem from './ClienteItem';

class Client extends Component{
  constructor(){
    super();
    this.state = {
      clientes: []
    }
  }

  componentWillMount(){
    this.getClientes();
  }

  getClientes(){
    axios.get('http://localhost:3000/api/Clientes')
      .then(response => {
        this.setState({clientes: response.data}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const clienteItems = this.state.clientes.map((cliente, i) => {
      return(
        <ClienteItem key={cliente.id} item={cliente} />
      )
    })
    return (
      <div>
        <h1>Clientes</h1>
        <ul className="collection">
          {clienteItems}
        </ul>
      </div>
    )
  }
}

export default Client;