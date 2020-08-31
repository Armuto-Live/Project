import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cliente from './Cliente';
import About from './About';
import ClienteDetails from './ClienteDetails';
import AddCliente from './AddCliente';
import EditCliente from './EditCliente';

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