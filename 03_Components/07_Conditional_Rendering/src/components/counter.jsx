import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    //tags: ['tag1', 'tag2', 'tag3'],
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no Tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
      return <Fragment>
          {this.state.tags.length===0 && "Please create new tag!"}
        {this.renderTags()}
    </Fragment>;
  }
}

export default Counter;
