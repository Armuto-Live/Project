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
    this.getPromocion();
  }

  getPromocion(){
    let promocionId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Promocions/${promocionId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let promocionId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/Promocions/${promocionId}`)
      .then(response => {
        this.props.history.push('/promocion');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div>
       <br />
       <Link className="btn grey" to="/promocion">Regresar</Link>
       <h1>{this.state.details.tituloPromocion}</h1>
       <ul className="collection">
        <li className="collection-item">Descripcion: {this.state.details.descripcionPromocion}</li>
        <li className="collection-item">Fecha de Inicio: {this.state.details.fechaInicio}</li>
        <li className="collection-item">Fecha de Caducidad: {this.state.details.fechaCaducidad}</li>
        </ul>
        <Link className="btn" to={`/promocion/edit/${this.state.details.id}`}> Edit</Link>

        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default ClienteDetails;