import React from 'react';
import Search from '../components/Search';

class Header extends React.Component{
  render() {
    return (
      <div className='header'>
        <h1>Header.js</h1>
        <Search />
      </div>
    )
  }
};

module.exports = Header;
