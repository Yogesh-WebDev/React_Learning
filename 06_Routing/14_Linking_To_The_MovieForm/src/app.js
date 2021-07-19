import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customer from './components/customers';
import Movies from './components/movies';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MoviesForm from './components/movieForm'

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <NavBar />
        <main className='container m-3'>
          <Switch>
            <Route path='/movies/:id' component={MoviesForm}></Route>
            <Route path='/movies' component={Movies}></Route>
            <Route path='/customers' component={Customer}></Route>
            <Route path='/rentals' component={Rentals}></Route>
            <Route path='/not-found' component={NotFound}></Route>
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
