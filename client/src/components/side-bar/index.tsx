import React, { Component } from 'react';
import { SideBarItem } from './constants';
import urls from './constants';
import SideBarItemComponent from './item/side-bar-item.component';
import './side-bar.component.scss';

export default class SideBar extends Component {
  render() {
    return (
      <div id='app-sidebar'>
        {urls.map((singleUrl: SideBarItem, index: number) => (
          <SideBarItemComponent
            key={index}
            tag={singleUrl.tag}
            url={singleUrl.url}
            icon={singleUrl.icon}
          />
        ))}
      </div>
    )
  }
}