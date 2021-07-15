import React, { Component } from 'react';
//Stateless Functional Components
//sfc -->shortcut for template

const NavBar = ({ totalCounters}) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Navbar
          <span className='badge bg-secondary badge-pill'>
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

//cc-->shortcut for template
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className='navbar navbar-dark bg-dark'>
//         <div className='container-fluid'>
//           <a className='navbar-brand' href='#'>
//                     Navbar  <span className="badge bg-secondary badge-pill">{ this.props.totalCounters}</span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
