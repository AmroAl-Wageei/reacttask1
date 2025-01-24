import React, { Component } from 'react';

class Props6 extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <a href={this.props.homeLink}>Home</a> | 
          <a href={this.props.aboutLink}>About</a> | 
          <a href={this.props.contactLink}>Contact</a>
        </nav>
      </header>
    );
  }
}

export default Props6;
// <Props6 title="My Website" hLink="/a" aLink="/b" ctLink="/c" /> <hr  />
