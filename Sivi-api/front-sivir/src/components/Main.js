import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Client from './Client';
import About from './About';
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Client} />
      <Route exact path='/about' component={About} />
      <Route exact path='/meetups/add' component={AddMeetup} />
      <Route exact path='/meetups/edit/:id' component={EditMeetup} />
      <Route exact path='/meetups/:id' component={MeetupDetails} />
    </Switch>
  </main>
)

export default Main;