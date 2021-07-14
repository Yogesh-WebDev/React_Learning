import React, { Component, Fragment } from 'react';
import Counter from './counter';
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <Fragment>
            {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} >
                <h4>Counter #{ counter.id}</h4>
            </Counter>)}
      </Fragment>
    );
  }
}

export default Counters;
