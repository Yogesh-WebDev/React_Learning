import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };
//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }
//      to avoid above constructor method binding use arrow function for "undefined" problem of this keyword
  handleIncrement= ()=> {
    console.log('Increment Clicked', this);
  }
  render() {
    return (
      <Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </Fragment>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
