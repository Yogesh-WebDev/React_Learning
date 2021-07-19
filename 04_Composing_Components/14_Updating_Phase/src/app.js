import React, { Component, Fragment } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {
    state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    };
    constructor() {
        //one time use at the time of object initialization
        super();
        console.log("App - constructor");
    }
    componentDidMount() {
        //After dom redered completly 
        //Ajax call eg. this.setState({movies})
        console.log("App - Mounted");
    }

  handleIncrement = (counter) => {
    
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
    render() {
        console.log("App - Rendered");

        return (
            <Fragment>
                <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length }/>
                 <main className="container">
                    <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
                </main>
            </Fragment>
         );
    }
}
 
export default App;