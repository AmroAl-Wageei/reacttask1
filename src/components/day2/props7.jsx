import React, { Component } from 'react';

class Props7 extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Props7;
//  <Props7 label="Click Me" onClick={this.handleClick} />