import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditProducto extends Component{
  constructor(props){
    super(props);
    this.state = {
    id: '',
    nombreProducto: '',
    tamañoProducto: '',
    descripcionProducto: '',
    precioProducto: ''
    }

  }
  
  componentWillMount(){
    this.getProductoDetails();
  }

  getProductoDetails(){
    let productoId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Productos/${productoId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        nombreProducto: response.data.nombreProducto,
        tamañoProducto: response.data.tamañoProducto,
        descripcionProducto: response.data.descripcionProducto,
        precioProducto: response.data.precioProducto
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editProducto(newProducto){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/Productos/${this.state.id}`,
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
    this.editProducto(newProducto);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to={`/producto/${this.state.id}`}>Regresar</Link>
       <h1>Editar Producto</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <strong>Nombre: {this.state.nombreProducto}</strong>
            <input type="text" name="nombre" ref="nombre" />
            
          </div>
            <div className="input-field">
            <strong>Tamaño: {this.state.tamañoProducto}</strong>
            <input type="text" name="tamaño" ref="tamaño" />
            
          </div>
          <div className="input-field">
            <strong>Descripcion: {this.state.descripcionProducto}</strong>
            <input type="text" name="descripcion" ref="descripcion" />
            
          </div>
          <div className="input-field">
            <strong htmlFor="precio">Precio: {this.state.precioProducto}</strong>
            <input type="number" name="precio" ref="precio" />
            
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditProducto;