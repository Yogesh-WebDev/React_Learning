import React, { Component, Fragment } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    console.log("Counters - Render");
    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <Fragment>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        <br />
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={() => onIncrement(counter)}
            counter={counter}
          />
        ))}
      </Fragment>
    );
  }
}

export default Counters;
