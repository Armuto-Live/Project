import React, { Component } from 'react';
import axios from 'axios';
import PromocionItem from './PromocionItem';
import { Link } from 'react-router-dom';

class Promocion extends Component{
  constructor(){
    super();
    this.state = {
      promociones: []
    }
  }

  componentWillMount(){
    this.getPromociones();
  }
  
  getPromociones(){
    axios.get('http://localhost:3000/api/Promocions')
      .then(response => {
        this.setState({promociones: response.data}, () => {
          console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const promocionItems = this.state.promociones.map((promocion, i) => {
      return(
        <PromocionItem key={promocion.id} item={promocion} />
      )
    })
    return (
      <div>
        <h1>Promociones</h1>
        <ul className="collection">
          {promocionItems}
        </ul>
        <div className="fixed-action-btn">
      <Link to="/promocion/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
      </div>
    )
  }
}

export default Promocion;