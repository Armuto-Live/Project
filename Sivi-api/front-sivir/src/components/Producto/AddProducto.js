import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddProducto extends Component{
  addProducto(newProducto){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/Productos',
      data: newProducto
    }).then(response => {
      this.props.history.push('/producto');
    }).catch(err => console.log(err));

  }

  onSubmit(e){
    const newProducto = {
      nombreProducto: this.refs.nombre.value,
      tamañoProducto: this.refs.tamaño.value,
      descripcionProducto: this.refs.descripcion.value,
      precioProducto: this.refs.precio.value
      
    }
    this.addProducto(newProducto);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/producto">Regresar</Link>
       <h1>Agregar Producto</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="nombre" ref="nombre" />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="input-field">
            <input type="text" name="tamaño" ref="tamaño" />
            <label htmlFor="tamaño">Tamaño</label>
          </div>
          <div className="input-field">
            <input type="text" name="descripcion" ref="descripcion" />
            <label htmlFor="descripcion">Descripcion</label>
          </div>
          <div className="input-field">
            <input type="number" name="precio" ref="precio" />
            <label htmlFor="precio">Precio</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddProducto;