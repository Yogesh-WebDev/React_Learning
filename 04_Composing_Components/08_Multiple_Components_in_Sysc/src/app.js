import React, { Component, Fragment } from 'react';
//import Counter from './components/counter';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <NavBar />
                 <main className="container">
                    <Counters/>
                </main>
            </Fragment>
         );
    }
}
 
export default App;