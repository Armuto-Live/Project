import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return (
      <div>
        <nav className="green darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">SIVIR'S PIZZA</a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
              </a>
            <ul className="right hide-on-small-only">
              <li><Link to="/home">Home</Link></li>         
            </ul>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/cliente"><i className="fa fa-plus"></i>CLIENTES</Link></li>  
            <li><Link to="/pedido"><i className="fa fa-plus"></i>PEDIDOS</Link></li>  
            <li><Link to="/producto"><i className="fa fa-plus"></i> PRODUCTOS</Link></li>
            <li><Link to="/promocion"><i className="fa fa-plus"></i> PROMOCIONES</Link></li> 
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;