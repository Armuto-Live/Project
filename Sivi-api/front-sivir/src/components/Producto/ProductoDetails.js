import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ProductoDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getProducto();
  }

  getProducto(){
    let productoId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/Productos/${productoId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let productoId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/Productos/${productoId}`)
      .then(response => {
        this.props.history.push('/producto');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div>
       <br />
       <Link className="btn grey" to="/producto">Regresar</Link>
       <h1>{this.state.details.nombreProducto}</h1>
       <ul className="collection">
        <li className="collection-item">Descripcion: {this.state.details.descripcionProducto}</li>
        <li className="collection-item">Tamaño: {this.state.details.tamañoProducto}</li>
        <li className="collection-item">Precio: {this.state.details.precioProducto}</li>
        </ul>
        <Link className="btn" to={`/producto/edit/${this.state.details.id}`}> Edit</Link>

        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default ProductoDetails;