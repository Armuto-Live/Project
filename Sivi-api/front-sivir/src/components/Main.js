import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cliente from './Clientes/Cliente';
import About from './About';
import ClienteDetails from './Clientes/ClienteDetails';
import AddCliente from './Clientes/AddCliente';
import EditCliente from './Clientes/EditCliente';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Cliente} />
      <Route exact path='/about' component={About} />
      <Route exact path='/cliente/add' component={AddCliente} />
      <Route exact path='/cliente/edit/:id' component={EditCliente} />
      <Route exact path='/cliente/:id' component={ClienteDetails} />
    </Switch>
  </main>
)

export default Main;