import React, { Component } from 'react';
import { SideBarItem } from '../constants';
import './side-bar-item.component.scss';
import { Link } from 'react-router-dom';

export default class SideBarItemComponent extends Component<SideBarItem> {
  render() {
    return (
      <Link className='side-bar-item' to={this.props.url}>
        <span>{this.props.tag}</span>
        {this.props.icon}
      </Link>
    );
  }
}
