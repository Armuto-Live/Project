import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Pagina Inicio*/
import Home from './Home';

/* Importando Cliente */ 
import Cliente from './Clientes/Cliente';
import ClienteDetails from './Clientes/ClienteDetails';
import AddCliente from './Clientes/AddCliente';
import EditCliente from './Clientes/EditCliente';

/* Importando Pedido*/
import Pedido from './Pedidos/Pedido';
import PedidoDetails from './Pedidos/PedidoDetails'
import AddPedido from './Pedidos/AddPedido';
import EditPedido from './Pedidos/EditPedido';

/* Importando Producto*/
import Promocion from './Promociones/Promocion';
import PromocionDetails from './Promociones/PromocionDetails';
import AddPromocion from './Promociones/AddPromocion';
import EditPromocion from './Promociones/EditPromocion';


const Main = () => (
  <main>
    <Switch>
      
      <Route exact path='/home' component={Home} />

      <Route exact path='/cliente' component={Cliente} />
      <Route exact path='/cliente/add' component={AddCliente} />
      <Route exact path='/cliente/edit/:id' component={EditCliente} />
      <Route exact path='/cliente/:id' component={ClienteDetails} />

      <Route exact path='/pedido' component={Pedido} />
      <Route exact path='/pedido/add' component={AddPedido} />
      <Route exact path='/pedido/edit/:id' component={EditPedido} />
      <Route exact path='/pedido/:id' component={PedidoDetails} />

      <Route exact path='/promocion' component={Promocion} />
      <Route exact path='/promocion/add' component={AddPromocion} />
      <Route exact path='/promocion/edit/:id' component={EditPromocion} />
      <Route exact path='/promocion/:id' component={PromocionDetails} />
    </Switch>
  </main>
)

export default Main;