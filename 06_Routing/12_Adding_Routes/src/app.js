import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customer from './components/customers';
import Movies from './components/movies';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

class App extends Component {
  state = {};
  render() {
    return (
      <main className='container m-5'>
        <Switch>
          <Route path='/movies' component={Movies}></Route>
          <Route path='/customers' component={Customer}></Route>
          <Route path='/rentals' component={Rentals}></Route>
          <Route path='/not-found' component={NotFound}></Route>
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    );
  }
}

export default App;
