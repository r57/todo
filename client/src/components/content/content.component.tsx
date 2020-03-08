import React, { Component } from 'react'
import './content.component.scss';

export default class ContentComponent extends Component {
  render() {
    return (
      <div className="content-container">
        {this.props.children}
      </div>
    );
  }
}