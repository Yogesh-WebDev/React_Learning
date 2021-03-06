import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
      count: 0,
        imageUrl:"https://picsum.photos/200"
    };
    style = {
        fontSize: 15,
        fontWeight:"bold"
    }
  render() {
    return (
        <Fragment>
           <img src={this.state.imageUrl} alt="" />
        <span style={this.style} className="badge bg-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
