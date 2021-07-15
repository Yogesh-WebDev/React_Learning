import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
                    Navbar  <span className="badge bg-secondary badge-pill">{ this.props.totalCounters}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
