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
              <li><Link to="/">Home</Link></li>         
            </ul>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/"><i className="fa fa-plus"></i>CLIENTE</Link></li>  
            <li><Link to="/cliente/add"><i className="fa fa-plus"></i>PEDIDO(ADD MEETUP)</Link></li>  
            <li><Link to="/meetups/add"><i className="fa fa-plus"></i> PRODUCTO(ADD MEETUP)</Link></li>
            <li><Link to="/about"><i className="fa fa-plus"></i> PROMOCION(ABOUT)</Link></li> 
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;