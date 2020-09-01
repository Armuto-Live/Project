import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import './Home.css';

//import Sivir's logo
import logo from './Logo.png';


class Home extends React.Component{

  render(){
    return(
      <React.Fragment >
        <h1 className="center">BIENVENIDO INVOCADOR</h1>
        <Container>
          <Image className="logoSivir" src={logo}/>
        </Container>
      </React.Fragment>
    );
  }

}

export default Home;