import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class PromocionCliente extends Component{
  addPromocion(newPromocion){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/Promocions',
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
    this.addPromocion(newPromocion);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Regresar</Link>
       <h1>Agregar Promocion</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="titulo" ref="titulo" />
            <label htmlFor="titulo">Titulo</label>
          </div>
          <div className="input-field">
            <input type="text" name="descripcion" ref="descripcion" />
            <label htmlFor="descripcion">Descripcion</label>
          </div>
          <div className="input-field">
            <strong>Fecha Inicio</strong>
            <input type="date" name="inicio" ref="inicio" />
          </div>
          <div className="input-field">
            <strong>Fecha Fin</strong>
            <input type="date" name="caducidad" ref="caducidad" />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default PromocionCliente;