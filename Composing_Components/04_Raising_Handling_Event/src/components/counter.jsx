import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  style = {
    fontSize: 15,
    fontWeight: 'bold',
  };
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

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
        <button
          onClick={this.props.onDelete}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </Fragment>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.value === 0 ? 'warning' : 'primary';

    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
