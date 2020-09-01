import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditCliente extends Component{
  constructor(props){
    super(props);
    this.state = {
    id: '',
    tituloPromocion: '',
    descripcionPromocion: '',
    fechaInicio: '',
    fechaCaducidad: ''
     
    }

  }
  
  componentWillMount(){
    this.getPromocionDetails();
  }

  getPromocionDetails(){
    let promocionId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Promocions/${promocionId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        tituloPromocion:   response.data.tituloPromocion,
        descripcionPromocion: response.data.descripcionPromocion,
        fechaInicio: response.data.fechaInicio,
        fechaCaducidad: response.data.fechaCaducidad
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editPromocion(newPromocion){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/Promocions/${this.state.id}`,
      data: newPromocion
    }).then(response => {
      this.props.history.push('/promocion');
    }).catch(err => console.log(err));

  }

  onSubmit(e){
    const newPromocion = {
      tituloPromocion: this.refs.titulo.value,
      descripcionPromocion: this.refs.descripcion.value,
      fechaInicio: this.refs.inicio.value,
      fechaCaducidad: this.refs.caducidad.value
    }
    this.editPromocion(newPromocion);
    e.preventDefault();
  }



  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to={`/promocion/${this.state.id}`}>Regresar</Link>
       <h1>Editar Promocion</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <strong>Titulo: {this.state.tituloPromocion}</strong>
            <input type="text" name="titulo" ref="titulo"/>
            
          </div>
          <div className="input-field">
            <strong>Descripcion: {this.state.descripcionPromocion}</strong>
            <input type="text" name="descripcion" ref="descripcion" />

          </div>
          <div className="input-field">
            <strong>Fecha Inicio: {this.state.fechaInicio}</strong>
            <input type="date" name="inicio" ref="inicio" />
          </div>
          <div className="input-field">
            <strong>Fecha Fin: {this.state.fechaCaducidad}</strong>
            <input type="date" name="caducidad" ref="caducidad" />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditCliente;