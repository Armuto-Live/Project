import React, { Component } from 'react';
import axios from 'axios';
import ProductoItem from './ProductoItem';
import { Link } from 'react-router-dom';

class Producto extends Component{
  constructor(){
    super();
    this.state = {
      productos: []
    }
  }

  componentWillMount(){
    this.getProductos();
  }
  
  getProductos(){
    axios.get('http://localhost:3000/api/Productos')
      .then(response => {
        this.setState({productos: response.data}, () => {
          
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const productoItems = this.state.productos.map((producto, i) => {
      return(
        <ProductoItem key={producto.id} item={producto} />
      )
    })
    return (
      <div>
        <h1>Productos</h1>
        <ul className="collection">
          {productoItems}
        </ul>
        <div className="fixed-action-btn">
      <Link to="/producto/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
      </div>
    )
  }
}

export default Producto;